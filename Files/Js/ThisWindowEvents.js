

function ThisWindow_EventLoad(EVENT) 
{ 
    const INDEXED_DATABASE_FACTORY = new Connections( 
        [ 
            window[`indexedDB`] 
        ] 
    ); 

    EVENT[`target`][`head`][`dataset`][`__proto__`][`CONNECTIONS`] = ( 
        { 
            "INDEXED_DATABASE_FACTORY": INDEXED_DATABASE_FACTORY   
        } 
    ); 

    
    
    INDEXED_DATABASE_FACTORY.OpenDataBaseBool( 
        [ 
            [ `DataBaseTelegramBotAPI`, 1 ], 
            [ 
                [ `TableOrdersPizza` ] 
            ], 
            [    
                [ 
                    ()=>false, 
                    () =>
                    { 
                        const TRANSACTION = INDEXED_DATABASE_FACTORY.GetTransactionWithArrayTablesFromDataBase( 
                            [ 
                                [ [`TableOrdersPizza`], `readwrite` ] 
                            ] 
                        ); 

                        TRANSACTION.GetAllRecordsBool( 
                            [ 
                                [ 
                                    [ `TableOrdersPizza` ]                                     
                                ], 
                                [], 
                                [ 
                                    [ 
                                        ARRAY_PARAMETERS => 
                                        { 
                                            var StringTBodyHTML = ``; 

                                            ARRAY_PARAMETERS[0][`target`][`result`].forEach( 
                                                RECORD => 
                                                { 
                                                    
                                                    StringTBodyHTML += ` 
                                                        <tr> 
                                                            <td> ${RECORD[`ID`]} </td> 
                                                            <td> ${RECORD[`TypeProduct`]} </td> 
                                                            <td> ${RECORD[`TypeProductCost`]} </td> 
                                                            <td> ${RECORD[`TypeProductLength`]} </td> 
                                                            <td> ${RECORD[`TypeProductCost`]*RECORD[`TypeProductLength`]} </td> 
                                                            <td> ${RECORD[`NameCustomer`]} </td> 
                                                            <td> ${RECORD[`DeliveryPointCustomer`]} </td> 
                                                            <td> ${RECORD[`EmailCustomer`]} </td> 
                                                            <td> ${RECORD[`PhoneCustomer`]} </td> 
                                                        </tr> 
                                                    `; 
                                                } 
                                            ); 

                                            ID_TABLE_PRINT_ARRAY_MAKE_ORDERS[`children`][1][`innerHTML`] = StringTBodyHTML; 

                                            console.dir( ID_TABLE_PRINT_ARRAY_MAKE_ORDERS[`children`][1])
                                        }, 
                                        ARRAY_PARAMETERS =>
                                        { 
                                            alert(`ERROR`)
                                        } 
                                    ]
                                ] 
                            ] 
                        ); 
                        
                    }, 
                    ()=>false, 
                    ()=>false 
                ] 
            ] 
        ] 
    ); 


} 

window[`onload`] = ThisWindow_EventLoad; 

