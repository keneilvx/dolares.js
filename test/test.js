const { Dolares } = require("../dist/index.js");

const dolares = new Dolares();



console.log(dolares.format(25000, "EUR", "de-DE"));
console.log();
console.log(dolares.format(25000, "JPY","ja-JP",0));
console.log(dolares.getSymbol("EUR"));
console.log(Intl.NumberFormat.supportedLocalesOf())
// console.log(dolares.available_currencies());

