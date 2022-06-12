# Dolares 

A library made for formatting currencies, built using the ES6. It allows you 
to easily format currencies with ease
 
 
 ## Importing Dolares
 
 to include dolares just import the libary using script tags you either use the minified version or the unminified version, I would recommend you use minified version for better perfomance 
 
```<script src="dolares.min.js"></script> ```

OR 

```<script src="dolares.js"></script> ```
 
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

## Checking for available currencies 

To see all available currencies you can use the ```.available_currencies()``` method to access the object containing all available curriencies 

```
let all_Currencies = dolares().available_currencies()
console.log(all_Currencies)

```


## Developer notes 

currently this package inserts a itself into window object so their isnt a way to include it on server side (using node etc), you can include dolares on the client side by either inserting dolares by any necessary client side means.

future version will of the plugin will be release to support server-side but for now this beta version will be available 

Version ```0.1.2-Beta```
