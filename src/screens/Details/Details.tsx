import {Entypo} from '@expo/vector-icons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  AspectRatio,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  ScrollView,
  Stack,
  Text,
  View,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import Loading from '../../components/Loading/Loading';
import httpClient from '../../infrastructure/httpClient';
import {ProductType} from '../../types/ProductType';
import {RootStackParamList} from '../../types/RootStackParamList';
import ToMoney from '../../utils/ToMoney';
import useCart from '../Cart/hooks/useCart';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

function Details({route}: Props) {
  const {productId} = route.params;

  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const {addToCart} = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await httpClient.get(`/products/${productId}`);

      setProduct(data);
      setLoading(false);
    };

    fetchData().catch(console.error);
  }, [productId]);

  if (!product && loading) {
    return <Loading />;
  }

  return (
    <View flex="1">
      <ScrollView p="2">
        <AspectRatio w="100%" ratio={4 / 3}>
          <Image
            source={{
              uri: product?.image,
            }}
            alt="image"
          />
        </AspectRatio>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {product?.title}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'gray.500',
              }}
              _dark={{
                color: 'gray.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              {product?.category}
            </Text>
          </Stack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="green.500"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="700">
                {ToMoney(product?.price ?? 0)}
              </Text>
            </HStack>
          </HStack>

          <Text>{product?.description}</Text>
        </Stack>
      </ScrollView>
      <View height="60px" p="2" justifyContent="center">
        {product && (
          <Button
            onPress={() => addToCart(product)}
            leftIcon={<Icon as={Entypo} name="shopping-cart" size="sm" />}>
            Adicionar no Carrinho
          </Button>
        )}
      </View>
    </View>
  );
}

export default Details;
