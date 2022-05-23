import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text, View} from 'native-base';
import React from 'react';

type RootStackParamList = {
  Details: {productId: string};
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

function Details({route, navigation}: Props) {
  const {productId} = route.params;

  console.log(route);
  return (
    <View>
      <Text>Details {productId}</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Details</Button>
    </View>
  );
}

export default Details;
