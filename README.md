# Dolares 

A library made for formatting currencies, built using typescript. It allows you 
to easily format currencies with ease

## Installation 

NPM
 
 ```console
 npm i dolares
```
 
PNPM
 
 ```console
 pnpm i dolares
```
 
BUN
 
  ```console
  bun i dolares
 ```
 
 ## Importing Dolares
 
To import dolares, you will have to add following 

```js 
import {Dolares} from 'dolares'
```

Then declare dolares 

```js
const dolares = new Dolares();
```

 
## Formatting Currencies 
 ```.format()``` takes in 2  values by default ```amount``` and the country's currency code ```currency```


 ```js
dolares.format(25000, 'USD')
 //output: $25,000.00

```


## Changing formating 
additonal their are two optional parameters that allow you to change the formating ```locale``` and ```custom_digits```
by default the locale is ```en-US``` and custom_digits is ```2```
 ```js

dolares.format(25000, "EUR", "de-DE")
//output : 25.000,00 €

dolares.format(2500000, "JPY","ja-JP",0)
//output : ￥25,000,000
 
```


## Checking for available currencies 

To see all available currencies you can use the ```.available_currencies()``` method to access the object containing all available curriencies 

```js
let all_Currencies = dolares.available_currencies()
console.log(all_Currencies)

```


## Developer notes 

Additional methods will be added later better support in the future. Please feel free to raise any issues https://github.com/keneilvx/dolares.js/issues

Version ```1.0.2```
