import { CartItemType } from "../App";

export const _priceFilter = (
  priceFilter: string | null,
  data: CartItemType[]
): CartItemType[] => {
  if ("lth" === priceFilter) {
    data = data.sort((a: CartItemType, b: CartItemType) => a.price - b.price);
  } else if ("htl" === priceFilter) {
    data = data
      .sort((a: CartItemType, b: CartItemType) => a.price - b.price)
      .reverse();
  }

  return data;
};
