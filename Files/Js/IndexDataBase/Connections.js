

function Connections(ARRAY_SETTINGS)
{ 
    const ThisPrivate = this, ARRAY_FIELDS = new Array(); 

    function ConstructorPrivateFields() 
    { 
        ARRAY_FIELDS[`PRIVATE`] = ( 
            { 
                "ObjectDataBase": undefined 
                //"DataBaseEventsStrategies": undefined 
            } 
        ); 

    } 

    function ConstructorPrivateMethods() 
    { 
        ARRAY_FIELDS[`PRIVATE`][`METHODS`] = ( 
            { 
            } 
        ); 
    } 

    function ConstructorPublicMethods() 
    { 
        ThisPrivate[`OpenDataBaseBool`] = ARRAY_PARAMETERS => 
        { 
            //ARRAY_FIELDS[`PRIVATE`][`DataBaseEventsStrategies`] = new IMPORT_CLASSES[`INDEX_DATABASE`][`DESIGN_PATTERNS`][`STRATEGIES`][`DATABASE_EVENTS`].DataBaseEvents_Strategies(); 
            const TEMPORARY_ARRAY = new Array(2); 
            TEMPORARY_ARRAY[0] = ARRAY_SETTINGS[0].open(ARRAY_PARAMETERS[0][0], ARRAY_PARAMETERS[0][1]); 
            TEMPORARY_ARRAY[1] = new DataBaseEvents_Strategies(); 

            [ `onupgradeneeded`, `onsuccess`, `onerror`, `onblocked` ].forEach( 
                (STRING_EVENT, INDEX) => ( 
                    TEMPORARY_ARRAY[0][STRING_EVENT] = ( 
                        EVENT => 
                        { 
                            TEMPORARY_ARRAY[1].SetStrategy(INDEX); 
                            TEMPORARY_ARRAY[1].GetStrategy().ConsumeBool( 
                                [ 
                                    ARRAY_FIELDS[`PRIVATE`], 
                                    [ EVENT, ARRAY_PARAMETERS[1] ], 
                                    ARRAY_PARAMETERS[2][0][INDEX] 
                                ] 
                            ); 
                        } 
                    ) 
                ) 
            ); 
            
            return true; 
        }; 
        
        ThisPrivate[`PromiseGetArrayDataBasesName`] = () => ( ARRAY_SETTINGS[0].databases() ); 
        ThisPrivate[`PromiseDeleteDataBase`] = DATABASE_NAME => ( ARRAY_SETTINGS[0].deleteDatabase(DATABASE_NAME) ); 
        
        ThisPrivate[`GetTransactionWithArrayTablesFromDataBase`] = ARRAY_PARAMETERS => 
        { 
            const TEMPORARY_ARRAY = new Array(2); 
            TEMPORARY_ARRAY[0] = ARRAY_FIELDS[`PRIVATE`][`ObjectDataBase`].transaction(ARRAY_PARAMETERS[0][0], ARRAY_PARAMETERS[0][1]); 
            TEMPORARY_ARRAY[1] = new Array( ARRAY_PARAMETERS[0][`length`] ); 
            
            ARRAY_PARAMETERS[0][0].forEach( 
                (TABLE_NAME, INDEX) => ( TEMPORARY_ARRAY[1][INDEX] = TEMPORARY_ARRAY[0].objectStore(TABLE_NAME) ) 
            ); 
            
            return ( 
                new Transactions( 
                    [ 
                        TEMPORARY_ARRAY[1] 
                    ] 
                ) 
            ); 
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

