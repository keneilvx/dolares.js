# Dolares 

A library made for formatting currencies, built using the ES6. It allows you 
to easily format currencies with ease
 
 
 ## Importing Dolares
 

 - you in initialize dolares by defining a variable and assigning dolares to it, dolares takes in two parameters
a ```ISO_CODE/COUNTRY_NAME``` and a ```VALUE``` 

``` 
 dolares('ISO_CODE/COUNTRY', 'AMOUNT')
let dollar = dolares("YEN", "", 100) 

```
OR 

``` 

let dollar = dolares("japan", "", 100) 

```
 
## Returning a value 
 takes in a parameter of amount you want to convert to currency this should be a number 

 

 ```

  let dollar = dolares('USA', 1000)
  
  dollar.Currency()
  output: $1000.00
  
  
```


## Formatting 
Formatting values are simple appending ```.format()``` after calling ```.Currency```

 ```

  let dollar = dolares('USA', 1000)
  
  dollar.Currency().format()
  output: $1000.00
  
  
```
