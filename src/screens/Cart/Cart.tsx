import {Box, Button, Text, View} from 'native-base';
import React from 'react';
import useCart from './hooks/useCart';

function Cart() {
  const {cart, removeFromCart} = useCart();
  return (
    <View>
      {cart.map((product, index) => (
        <Box key={product.id}>
          <Text>{product.title}</Text>
          <Button onPress={() => removeFromCart(index)}>Remove</Button>
        </Box>
      ))}
    </View>
  );
}

export default Cart;
