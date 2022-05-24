//semicolon prevents clashing when mounted into window object
;(function(global){
debugger
    //create a first class function that takes in currency or country
    let Dolares = function (currency, country , value){
        return new Dolares.init(currency , country, value)
    }


    let currencies = {

            JMD: {
                name: "JMD",
                country: "jamaica ",
                symbol: "$"
            },
            JPN : {
                name: "YEN",
                country: "Japan",
                symbol:'¥'
            }

}


    // create prototype to access all methods in the Dolares scope
    Dolares.prototype ={
            //gets the symbol of the currency entered
            // TODO: Fix the issue where currency object is not being pass into this function
            Currency : function (){
                debugger
                //check if currency exists
                if (this.currency){
                    //loop through the array Object to find the currency
                    for(const property in currencies){
                        debugger
                        //if currency is equal to any of the currency names in the list
                        if(property === this.currency ){
                            return property
                        }
                        else{
                            return "Unknown Currency"
                        }
                    }
                }
            },


            //checks current currency the user entered
            check_currency : function (){
                if (this.currency){
                    return this.currency
                }
                else{
                    return "Invalid currency or currency is null"
                }

            },

        //TODO: write necessary function to handle said description
            // converts a string or value into a currency value
            format: function(){
                    if (this.value){
                        if (typeof(this.value) === "number"){
                            return this.value.toFixed(2);
                        }else {
                            return "value is not a number"
                        }
                    }

            },
        //TODO: write necessary function to handle said description
            //returns a list of all currencies available to the user using ISO 4217 standards
            available_currencies: function (){
                return(currencies)
            }

    }


    //initialize function and bind the "this" keyword to the Dolores scope
    Dolares.init = function (currency , country , value){
        let self = this;
        self.currency = currency || ""
        self.country =  country || ""
        self.value =  value || 0
    }

    //Point to Dolares.prototype so we dont have to use the new keyword everytime we call dolares
    Dolares.init.prototype = Dolares.prototype

    //export dolares into the global object
    global.Dolares = global.dolares = Dolares

}(window))