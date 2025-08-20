import { currencies } from "../../data/currencyDetails";
import { Currency } from "../types/Currency";

export class Currencies {
  available_currencies(): Currency[] {
    return currencies;
  }
}
