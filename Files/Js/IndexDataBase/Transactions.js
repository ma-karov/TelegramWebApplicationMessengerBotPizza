

function Transactions(ARRAY_SETTINGS) 
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
                "AddQueryHandlers": ARRAY_PARAMETERS =>
                { 
                    const TEMPORARY_ARRAY = new Array(2); 
                    TEMPORARY_ARRAY[0] = new TransactionsEvents_Strategies(); 

                    [ `onsuccess`, `onerror` ].forEach( 
                        (STRING_EVENT, INDEX) => ( 
                            ARRAY_PARAMETERS[0][STRING_EVENT] = ( 
                                EVENT => 
                                { 
                                    TEMPORARY_ARRAY[0].SetStrategy(INDEX); 
                                    TEMPORARY_ARRAY[0].GetStrategy().ConsumeBool( 
                                        [ 
                                            [ EVENT, ARRAY_PARAMETERS[1] ], 
                                            ARRAY_PARAMETERS[2][0][INDEX] 
                                        ] 
                                    ); 
                                } 
                            ) 
                        ) 
                    ); 
                    
                } 
            } 
        ); 
    } 

    function ConstructorPublicMethods() 
    { 
        ThisPrivate[`AddRecordsBool`] = ARRAY_PARAMETERS => 
        { 
            ARRAY_SETTINGS[0].forEach( 
                TABLE => 
                    ARRAY_PARAMETERS[0].forEach( 
                        SUB_ARRAY => 
                        { 
                            if (SUB_ARRAY[0] == TABLE[`name`]) 
                                ARRAY_FIELDS[`PRIVATE`][`METHODS`].AddQueryHandlers( 
                                    [ 
                                        TABLE.add( SUB_ARRAY[1] ), 
                                        ARRAY_PARAMETERS[1], 
                                        ARRAY_PARAMETERS[2] 
                                    ] 
                                ); 
                        } 
                    ) 
            ); 
            
            return true; 
        }; 
        
        ThisPrivate[`DeleteRecordsBool`] = ARRAY_PARAMETERS => 
        { 
            ARRAY_SETTINGS[0].forEach( 
                TABLE => 
                    ARRAY_PARAMETERS[0].forEach( 
                        SUB_ARRAY => 
                        { 
                            if (SUB_ARRAY[0] == TABLE[`name`]) 
                                ARRAY_FIELDS[`PRIVATE`][`METHODS`].AddQueryHandlers( 
                                    [ 
                                        TABLE.delete( SUB_ARRAY[1][`ID`] ), 
                                        ARRAY_PARAMETERS[1], 
                                        ARRAY_PARAMETERS[2] 
                                    ] 
                                ); 
                        } 
                    ) 
            ); 
            
            return true; 
        }; 
        
        ThisPrivate[`GetAllRecordsBool`] = ARRAY_PARAMETERS => 
        { 
            ARRAY_SETTINGS[0].forEach( 
                TABLE => 
                    ARRAY_PARAMETERS[0].forEach( 
                        SUB_ARRAY => 
                        { 
                            if (SUB_ARRAY[0] == TABLE[`name`]) 
                                ARRAY_FIELDS[`PRIVATE`][`METHODS`].AddQueryHandlers( 
                                    [ 
                                        TABLE.getAll(), 
                                        ARRAY_PARAMETERS[1], 
                                        ARRAY_PARAMETERS[2] 
                                    ] 
                                ); 
                        } 
                    ) 
            ); 
            
            return true; 
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

