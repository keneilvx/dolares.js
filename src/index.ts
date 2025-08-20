import { findCurrency } from "./lib/utils/findCurrency";
import { Currency } from "./lib/types/Currency";
import { currencies } from "./data/currencyDetails";
import { Formatter } from "./lib/plugins/Formatter";
import { Currencies } from "./lib/plugins/Currencies";

export class Dolares {
  // using facade pattern

  private currencies: Currencies;

  constructor() {
    this.currencies = new Currencies();
  }
  format(
    amount: number,
    currency: string,
    locale: string = "en-US",
    digits: number = -1
  ) {
    const formatter = new Formatter(currency);
    return formatter.format(amount, locale, digits);
  }

  getSymbol(currency: string) {
    const formatter = new Formatter(currency);
    return formatter.getSymbol();
  }

  available_currencies() {
    return this.currencies.available_currencies();
  }
}

//  const dolares = new Dolares(10000, "USD");

//  console.log('get formatted amount', dolares.format());
//  console.log('get Symbol',dolares.getSymbol());
