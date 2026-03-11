

function QuerySuccessEvent_Strategy() 
{ 
    const ThisPrivate = this, ARRAY_FIELDS = new Array(); 

    function ConstructorPrivateFields() 
    { 
        ARRAY_FIELDS[`PRIVATE`] = ( 
            { 
            } 
        ); 

    } 

    function ConstructorPrivateMethods() 
    { 
        ARRAY_FIELDS[`PRIVATE`][`METHODS`] = ( 
            { 
            } 
        ) 
    } 

    function ConstructorPublicMethods() 
    { 
        ThisPrivate[`ConsumeBool`] = ARRAY_PARAMETERS => 
        {
            console.log(QuerySuccessEvent_Strategy.name, ARRAY_PARAMETERS) 

            ARRAY_PARAMETERS[1]( new Array() ); 

            return true; 
        }; 
        
        ThisPrivate[`GetResult`] = () => undefined; 
    } 

    function Constructor() 
    { 
        ConstructorPrivateFields(); 

        ConstructorPrivateMethods(); 

        ConstructorPublicMethods(); 

    } 

    Constructor(); 
    
} 


function QueryErrorEvent_Strategy() 
{ 
    const ThisPrivate = this, ARRAY_FIELDS = new Array(); 

    function ConstructorPrivateFields() 
    { 
        ARRAY_FIELDS[`PRIVATE`] = ( 
            { 
            } 
        ); 

    } 

    function ConstructorPrivateMethods() 
    { 
        ARRAY_FIELDS[`PRIVATE`][`METHODS`] = ( 
            { 
            } 
        ) 
    } 

    function ConstructorPublicMethods() 
    { 
        ThisPrivate[`ConsumeBool`] = ARRAY_PARAMETERS => 
        {
            console.log(QueryErrorEvent_Strategy.name, ARRAY_PARAMETERS) 

            ARRAY_PARAMETERS[1]( new Array() ); 

            return true; 
        }; 
        
        ThisPrivate[`GetResult`] = () => undefined; 
    } 

    function Constructor() 
    { 
        ConstructorPrivateFields(); 

        ConstructorPrivateMethods(); 

        ConstructorPublicMethods(); 

    } 

    Constructor(); 
    
} 


function TransactionsEvents_Strategies()
{ 
    const ThisPrivate = this, ARRAY_FIELDS = new Array(); 

    function ConstructorPrivateFields() 
    { 
        ARRAY_FIELDS[`PRIVATE`] = ( 
            { 
                "INDEX_STRATEGY": undefined, 
                "ArrayTransactionsEventsStrategies": ( 
                    [ 
                        new QuerySuccessEvent_Strategy(), 
                        new QueryErrorEvent_Strategy() 
                    ] 
                ) 
            } 
        ); 

    } 

    function ConstructorPrivateMethods() 
    { 
        ARRAY_FIELDS[`PRIVATE`][`METHODS`] = ( 
            { 
            } 
        ) 
    } 

    function ConstructorPublicMethods() 
    { 
        ThisPrivate[`SetStrategy`] = INDEX_STRATEGY => ( ARRAY_FIELDS[`PRIVATE`][`INDEX_STRATEGY`] = INDEX_STRATEGY ); 
        
        ThisPrivate[`GetStrategy`] = () => 
        { 
            const TEMPORARY_OBJECT = ARRAY_FIELDS[`PRIVATE`]; 
            
            return TEMPORARY_OBJECT[`ArrayTransactionsEventsStrategies`][ TEMPORARY_OBJECT[`INDEX_STRATEGY`] ]; 
        }; 
    } 

    function Constructor() 
    { 
        ConstructorPrivateFields(); 

        ConstructorPrivateMethods(); 

        ConstructorPublicMethods(); 

    } 

    Constructor(); 
    
} 

