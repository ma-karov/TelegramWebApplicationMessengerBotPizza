

function ThisWindow_EventLoad(EVENT) 
{ 
    EVENT[`target`][`head`][`dataset`][`__proto__`][`CONNECTIONS`] = ( 
        { 
            "INDEXED_DATABASE_FACTORY": new Connections( 
                [ 
                    window[`indexedDB`] 
                ] 
            ) 
        } 
    );

} 

window[`onload`] = ThisWindow_EventLoad; 

