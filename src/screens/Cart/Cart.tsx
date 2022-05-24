import {Entypo} from '@expo/vector-icons';
import {
  AspectRatio,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React from 'react';
import ToMoney from '../../utils/ToMoney';
import useCart from './hooks/useCart';

function Cart() {
  const {cart, removeFromCart, amountTotal} = useCart();
  return (
    <View flex="1">
      <ScrollView p="2">
        {cart.map((product, index) => (
          <HStack
            background="white"
            padding="2"
            mb={2}
            flex={1}
            rounded="md"
            key={product.id}>
            <AspectRatio h="100%" ratio={4 / 3}>
              <Image
                source={{
                  uri: product?.image,
                }}
                alt="image"
              />
            </AspectRatio>
            <View
              flex="1"
              background="white"
              padding="2"
              rounded="md"
              key={product.id}>
              <Text fontWeight="bold">{product.title}</Text>
            </View>
            <HStack w="50px">
              <IconButton
                onPress={() => removeFromCart(index)}
                icon={<Icon as={Entypo} color="red.500" name="cross" />}
              />
            </HStack>
          </HStack>
        ))}
      </ScrollView>
      <View height="60px" p="2" justifyContent="center">
        <Heading width="100%" textAlign="left">
          Total: {ToMoney(amountTotal)}
        </Heading>
      </View>
    </View>
  );
}

export default Cart;
