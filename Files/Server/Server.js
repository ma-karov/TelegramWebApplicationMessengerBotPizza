

const TelegramBot = require(`node-telegram-bot-api`);
const fs = require('fs');

const bot = new TelegramBot(`7832887531:AAFgzzHfvt5XXHocjAuUmDlX5RjL0bWVyyI`, { polling: true }); // Вместо слова TOKEN, укажите реальный токен вашего бота, который выдал вам BotFather 


const ADMIN_ID = '1402655980';
let awaitingSupportMessage = {}; // Хранение информации о пользователях, ожидающих поддержки
// Хранение выбранных тем для пользователей
let userTopics = {};


// Темы и файлы с вопросами
const topics = {
  math: { name: 'Математика', file: 'Files/JSON/Questions.json' },
//  english: { name: 'Английский', file: 'questions/english.json' },
//  history: { name: 'История', file: 'questions/history.json' }
};


// Функция для получения вопросов по выбранным темам
function getQuestionsByTopics(userId) {
  const selectedTopics = userTopics[userId] || Object.keys(topics);
  let allQuestions = [];
  selectedTopics.forEach(topic => {
    const questions = JSON.parse(fs.readFileSync(topics[topic].file, 'utf8'));
    allQuestions = allQuestions.concat(questions);
  });
  return allQuestions;
}


function getRandomQuestion(userId) {
  const questions = getQuestionsByTopics(userId);
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}


bot.on( 
    `message`, 
    EVENT => 
    { 
        bot.sendMessage( 
            EVENT[`chat`][`id`], 
            `Кнопка для перехода в веб-чат `, 
            { 
               "reply_markup": ( 
                { 
                    "keyboard": ( 
                        [ 
                            [ 
                                { 
                                    "text": `Перейти`, 
                                    web_app: { url: `https://ma-karov.github.io/TelegramWebApplicationMessengerBotPizza/` } 
                                } 
                            ] 
                        ] 
                    ) 
                } 
            ) 
            }
        ); 
    } 
); 



bot.onText(/\/quiz/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
 
  // Получаем случайный вопрос
  const questionData = getRandomQuestion(userId);
 
  // Отправляем опрос в виде викторины
  bot.sendPoll(
    chatId,
    questionData.question, // Вопрос
    questionData.options,  // Варианты ответов
    {
      type: 'quiz', // Тип викторины
      correct_option_id: questionData.correct_option_id, // Правильный ответ
      is_anonymous: false // Вопрос не будет анонимным
    }
  ).then(pollMessage => {
    // Обрабатываем результаты опроса
    bot.on('poll_answer', (answer) => {
      if (answer.poll_id === pollMessage.poll.id) {
        const selectedOption = answer.option_ids[0];
        // Проверяем, правильный ли ответ
        if (selectedOption !== questionData.correct_option_id) {
          bot.sendMessage(chatId, questionData.explanation);
        }
      }
    });
  });
});


bot.onText(/\/settopic/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;


  const keyboard = Object.keys(topics).map( 
    topicKey => ( 
      {
        text: `${(userTopics[userId] || []).includes(topicKey) ? '✅ ' : ''}${topics[topicKey].name}`,
        callback_data: topicKey, 
        web_app: { url: `https://ma-karov.github.io/TelegramWebApplicationMessengerBotPizza/` }
      } 
    ) 
  );


  bot.sendMessage(chatId, 'Выберите темы для вопросов:', {
    reply_markup: {
      inline_keyboard: [keyboard]
    }
  });
});


// Обработчик выбора тем
bot.on('callback_query', (callbackQuery) => {
  const message = callbackQuery.message;
  const userId = callbackQuery.from.id;
  const topicKey = callbackQuery.data;


  // Инициализируем выбранные темы для пользователя, если их нет
  if (!userTopics[userId]) {
    userTopics[userId] = Object.keys(topics);
  }


  // Добавляем или удаляем тему
  if (userTopics[userId].includes(topicKey)) {
    userTopics[userId] = userTopics[userId].filter(t => t !== topicKey);
  } else {
    userTopics[userId].push(topicKey);
  }


  // Обновляем сообщение с кнопками
  const keyboard = Object.keys(topics).map(topicKey => ({
    text: `${userTopics[userId].includes(topicKey) ? '✅ ' : ''}${topics[topicKey].name}`,
    callback_data: topicKey
  }));


  bot.editMessageReplyMarkup({
    inline_keyboard: [keyboard]
  }, { chat_id: message.chat.id, message_id: message.message_id });
});


bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Привет! Напиши /quiz, чтобы начать викторину. Для выбора тем используй /settopic.");
});


console.log('Бот запущен.');

  