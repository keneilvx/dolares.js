import { currencies } from "../../../data/currencyDetails";
import { Currency } from "../../types/Currency";

export function findCurrency(input: string): Currency | undefined {
  const term = input.toLowerCase();

  return currencies.find(c =>
    c.code.toLowerCase() === term ||
    c.name.toLowerCase().includes(term)
  );
}


