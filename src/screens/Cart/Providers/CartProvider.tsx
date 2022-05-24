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

  const addToCart = async (item: ProductType) => {
    const newCart = [...cart, item];

    setCart(newCart);
    setCartCount(newCart.length);
    await AsyncStorage.setItem('@TonStore:Cart', JSON.stringify(newCart));
  };

  const removeFromCart = async (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart([...newCart]);
    setCartCount(newCart.length);
    await AsyncStorage.setItem('@TonStore:Cart', JSON.stringify(newCart));
  };

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storedProducts = await AsyncStorage.getItem('@TonStore:Cart');

      if (storedProducts) {
        setCart([...JSON.parse(storedProducts)]);
        setCartCount([...JSON.parse(storedProducts)].length);
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
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
