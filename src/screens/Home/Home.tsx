import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView, Text, Flex} from 'native-base';
import React, {useEffect, useState} from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import httpClient from '../../infrastructure/httpClient';
import {ProductType} from '../../types/ProductType';

type RootStackParamList = {
  Home: undefined;
  Details: {productId: Number};
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({navigation}: Props) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await httpClient.get('/products');

      setProducts(data);
      setLoading(false);
    };

    fetchData().catch(console.error);
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <Flex
        w="100%"
        direction="row"
        p="1"
        justifyContent="space-between"
        wrap="wrap">
        {products.map(product => (
          <ProductCard
            product={product}
            onPress={() =>
              navigation.navigate('Details', {productId: product.id})
            }
          />
        ))}
      </Flex>
    </ScrollView>
  );
}

export default Home;
