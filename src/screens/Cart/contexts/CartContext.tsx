import {createContext} from 'react';
import {ProductType} from '../../../types/ProductType';

export type CartContextProps = {
  cart: ProductType[];
  cartCount: number;
  addToCart(item: ProductType): void;
  removeFromCart(index: number): void;
};

export default createContext<CartContextProps | null>(null);
