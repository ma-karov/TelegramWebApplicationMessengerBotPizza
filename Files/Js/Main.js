

// Пример каталога
const pizzas = [
    { id: 1, name: "Маргарита", price: 350 },
    { id: 2, name: "Пепперони", price: 420 },
    { id: 3, name: "Гавайи", price: 480 }
  ];

  const state = {
    items: [], // {id, name, price, qty}
  };

  function renderMenu() {
    pizzas.forEach(p => {
      const div = document.createElement('div');
      div.className = 'pizza';
      div.innerHTML = `
        <div>
          <strong>${p.name}</strong><div>Цена: ${p.price} ₽</div> 
        </div> 
        <div> 
          <input type = "number" class = "qty" min = 1 max = 10 id = "qty_${p.id}" value = 1 /> 
          <button data-id="${p.id}" class="addBtn" style="margin-left:8px;">Добавить</button>
        </div>
      `;
      menu.appendChild(div);
    });
  }

  function addToCart(pizzaId) {
    const pizza = pizzas.find(x => x.id === pizzaId);
    const qtyInput = document.getElementById(`qty_${pizzaId}`);
    const qty = Math.max(1, parseInt(qtyInput.value || '1', 10));
    const existing = state.items.find(it => it.id === pizzaId);
    if (existing) existing.qty += qty;
    else state.items.push({ id: pizzaId, name: pizza.name, price: pizza.price, qty });
    renderCart();
  }

  function renderCart() {
    const cartEl = document.getElementById('cart');
    const itemsEl = document.getElementById('cartItems');
    itemsEl.innerHTML = '';
    let total = 0;
    state.items.forEach(it => {
      const line = document.createElement('div');
      line.textContent = `${it.name} x ${it.qty} = ${it.price * it.qty} ₽`;
      itemsEl.appendChild(line);
      total += it.price * it.qty;
    });
    if (state.items.length > 0) {
      cartEl.style.display = 'block';
      document.getElementById('status').textContent = `Итого: ${total} ₽`;
    } else {
      cartEl.style.display = 'none';
    }
  }

  function placeOrder() {
    const name = document.getElementById('customerName').value.trim();
    if (state.items.length === 0) {
      alert('Добавьте пиццу в корзину.');
      return;
    }
    if (!name) {
      alert('Пожалуйста, укажите имя.');
      return;
    }
    // Подготовим данные заказа
    const order = {
      customerName: name,
      items: state.items,
      total: state.items.reduce((s, it) => s + it.price * it.qty, 0),
      // Telegram user info удобно получить через Web App API позже
      url: location.href
    };

    // Отправка данных в бэкэнд
    fetch('/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' ,
                 'X-TG-User': (Telegram.WebApp.initDataUnsafe?.user?.id ?? '')}
      , // можно добавить токен/секрет
      body: JSON.stringify(order)
    }).then(res => res.json())
      .then(data => {
        document.getElementById('status').textContent = 'Заказ отправлен! Ожидайте уведомления.';
      }).catch(err => {
        console.error(err);
        document.getElementById('status').textContent = 'Ошибка отправки заказа.';
      });
  }

  // инициализация
  document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    // делаем прослушку кликов по кнопкам "Добавить"
    document.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('addBtn')) {
        const id = parseInt(e.target.getAttribute('data-id'), 10);
        addToCart(id);
      }
    });

    document.getElementById('placeOrderBtn').addEventListener('click', placeOrder);
  }); 

  // Пример инициализации Web App (можно получить данные о пользователе)
  if (window.Telegram) {
    Telegram.WebApp.ready();
    console.log(window, Telegram.WebApp, Telegram.WebApp.initDataUnsafe);
  }


//console.log(1111111, document, document[`head`][`dataset`][`__proto__`][`CONNECTIONS`]);
