const { Dolares } = require("../dist/index.js");

const eur = new Dolares(25000, "EUR");
console.log(eur.format("de-DE"));