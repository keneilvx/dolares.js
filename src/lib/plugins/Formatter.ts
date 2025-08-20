import { Currency } from "../types/Currency";
import { findCurrency } from "../utils/findCurrency";
import {Currencies} from "../plugins/Currencies"
export class Formatter {
  private currency: Currency;

  constructor(currencyInput: string) {
    const found = findCurrency(currencyInput);
    if (!found) {
      throw new Error(`Invalid Currency ${currencyInput} either not currently supported or Entered Incorrectly`);
    }

    this.currency = found;
  }

  format(
    amount: number,
    locale: string = "en-US",
    custom_digits: number = -1
  ): string {
    const fractionDigits =
      custom_digits !== -1 ? custom_digits : this.currency.decimal_digits;
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: this.currency.code,
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(amount);
  }

  getSymbol():string{
    return this.currency.symbol_native;
  }
}
