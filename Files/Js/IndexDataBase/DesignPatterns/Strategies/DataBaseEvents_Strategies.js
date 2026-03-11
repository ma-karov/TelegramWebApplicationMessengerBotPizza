

function UpgradeNeededEvent_Strategy()
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
            const TEMPORARY_ARRAY = new Array(2); 
            TEMPORARY_ARRAY[0] = ARRAY_PARAMETERS[1][0][`target`][`result`]; 
            
            ARRAY_PARAMETERS[1][1].forEach( 
                TABLE_NAME => 
                { 
                    for (const OBJECT_STORE_NAME of TEMPORARY_ARRAY[0][`objectStoreNames`]) 
                        if (OBJECT_STORE_NAME == TABLE_NAME) 
                            TEMPORARY_ARRAY[0].deleteObjectStore(TABLE_NAME); 
                    
                    TEMPORARY_ARRAY[0].createObjectStore(TABLE_NAME, { "keyPath": `ID`, "autoIncrement": false } ); 
                } 
            ); 
            
            ARRAY_PARAMETERS[2](); 
            
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


function ConnectionSuccessEvent_Strategy()
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
            //const TEMPORARY_ARRAY = new Array(2);
            ARRAY_PARAMETERS[0][`ObjectDataBase`] = ARRAY_PARAMETERS[1][0][`target`][`result`]; 

            ARRAY_PARAMETERS[2](); 

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


function ConnectionErrorEvent_Strategy()
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
            console.log(ConnectionErrorEvent_Strategy.name, ARRAY_PARAMETERS) 

            ARRAY_PARAMETERS[2](); 

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


function ConnectionUnAttainableEvent_Strategy()
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
            console.log(ConnectionUnAttainableEvent_Strategy.name, ARRAY_PARAMETERS) 

            ARRAY_PARAMETERS[2](); 

            return false; 
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


function DataBaseEvents_Strategies()
{ 
    const ThisPrivate = this, ARRAY_FIELDS = new Array(); 

    function ConstructorPrivateFields() 
    { 
        ARRAY_FIELDS[`PRIVATE`] = ( 
            { 
                "INDEX_STRATEGY": undefined, 
                "ArrayDataBaseEventsStrategies": ( 
                    [ 
                        new UpgradeNeededEvent_Strategy(), 
                        new ConnectionSuccessEvent_Strategy(), 
                        
                        new ConnectionErrorEvent_Strategy(), 
                        new ConnectionUnAttainableEvent_Strategy() 
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
            
            return TEMPORARY_OBJECT[`ArrayDataBaseEventsStrategies`][ TEMPORARY_OBJECT[`INDEX_STRATEGY`] ]; 
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

