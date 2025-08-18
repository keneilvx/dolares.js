import { findCurrency } from "./lib/utils/findCurrency";
import { Currency } from "./lib/types/Currency";
import { currencies } from "./data/currencyDetails";

export class Dolares {
  amount: number;
  currency: Currency;

  constructor(amount: number, currencyInput: string) {
    //find the currency in question
    const found = findCurrency(currencyInput);
    if (!found) {
      throw new Error("Invalid input string entered");
    }

    this.amount = amount;
    this.currency = found;
  }

  format(locale: string = "en-US"): string {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: this.currency.code,
      minimumFractionDigits: this.currency.decimal_digits,
      maximumFractionDigits: this.currency.decimal_digits,
    }).format(this.amount);
  }

  getSymbol(): string {
    return this.currency.symbol;
  }

  available_currencies(): Currency[] {
    return currencies;
  }
}

//  const dolares = new Dolares(10000, "USD");

//  console.log('get formatted amount', dolares.format());
//  console.log('get Symbol',dolares.getSymbol());