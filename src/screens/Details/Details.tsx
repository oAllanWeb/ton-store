import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import httpClient from '../../infrastructure/httpClient';
import {ProductType} from '../../types/ProductType';
import {RootStackParamList} from '../../types/RootStackParamList';
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
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{product?.id}</Text>
      {product && (
        <Button onPress={() => addToCart(product)}>Add Product</Button>
      )}
    </View>
  );
}

export default Details;
