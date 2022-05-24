import React, {ReactElement, useEffect, useState} from 'react';
import CartContext from '../contexts/CartContext';
import {ProductType} from '../../../types/ProductType';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  children: ReactElement;
};

function CartProvider(props: Props): ReactElement {
  const {children} = props;
  const [cart, setCart] = useState<ProductType[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [amountTotal, setAmountTotal] = useState(0);

  const addToCart = async (item: ProductType) => {
    const newCart = [...cart, item];
    const total = newCart.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
    setCart(newCart);
    setCartCount(newCart.length);
    setAmountTotal(total);
    await AsyncStorage.setItem('@TonStore:Cart', JSON.stringify(newCart));
  };

  const removeFromCart = async (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    const total = newCart.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
    setCart([...newCart]);
    setCartCount(newCart.length);
    setAmountTotal(total);
    await AsyncStorage.setItem('@TonStore:Cart', JSON.stringify(newCart));
  };

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storedProducts = await AsyncStorage.getItem('@TonStore:Cart');
      if (storedProducts) {
        const newCart = [...JSON.parse(storedProducts)];
        const total = newCart.reduce((acc, curr) => {
          return acc + curr.price;
        }, 0);
        setCart([...newCart]);
        setCartCount(newCart.length);
        setAmountTotal(total);
      }
    }

    loadProducts();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
        amountTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
