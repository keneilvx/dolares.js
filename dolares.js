//semicolon prevents clashing when mounted into window object
;(function(global){
debugger
    //create a first class function that takes in currency or country and a value
    let Dolares = function (currency, country , value){
        return new Dolares.init(currency , country, value)
    }


    let currencies = [

            {
                name: "JMD",
                country: "Jamaica ",
                symbol: "$",
                decimal_points: 2,
            },
             {
                name: "YEN",
                country: "Japan",
                decimal_points: 2,
                symbol:'¥',
            },
            {
                name: "USD",
                country: "USA",
                decimal_points: 2,
                symbol: "$",

            },
            {

                name: "EURO",
                symbol: "€",
                decimal_digits: 2,
                rounding: 0,
                code: "EUR",

            }





    ]
        //Stores a default symbol for user
        let symbol = "$"


    // create prototype to access all methods in the Dolares scope
    Dolares.prototype ={
            //gets the symbol of the currency entered
            // TODO: Allow for the user to pass in user country as an option an return a currency
            Currency : function (){
                debugger
                //check if currency exists
                if (this.currency){
                    // store currency in a temporary variable
                    let tempCurrency = this.currency
                    //loop through the array Object to find the currency
                    for(let i = 0; i < currencies.length; i++){
                        debugger
                        //if currency is equal to any of the currency names in the list
                        if(currencies[i].name === tempCurrency ){
                           this.currency = tempCurrency
                            symbol = currencies[i].symbol
                        }
                        else{
                            this.currency ="Unknown Currency"
                        }
                    }
                    return this
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
            //checks the country user entered
            check_country : function (){
                if (this.country){
                    return this.country
                }
                else{
                    return "Invalid country or currency is null"
                }
            },


        //TODO: Manage currencies base on their region
            // converts a string or value into a currency value
            format: function(){
                    if (this.Currency){
                        if (typeof(this.value) === "number"){
                            return symbol + '' + this.value.toFixed(2);
                        }else {
                            return "value is not a number"
                        }
                    }
                    return this
            },
        //TODO: write necessary function to handle said description
            //returns a list of all currencies available to the user using ISO 4217 standards
            available_currencies: function (){
                return(currencies)
            },

        //TODO: write function that also takes in a currency and converts it into another currency

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