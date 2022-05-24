import React, {ReactNode} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home/Home';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Details from './screens/Details/Details';
import Cart from './screens/Cart/Cart';
import {RootStackParamList} from './types/RootStackParamList';
import HeaderCartButton from './components/HeaderCartButton/HeaderCartButton';
import CartProvider from './screens/Cart/Providers/CartProvider';

const Stack = createNativeStackNavigator();
type Props = NativeStackScreenProps<RootStackParamList, 'Cart'>;

const headerOptions = ({navigation}: Props): NativeStackNavigationOptions => {
  return {
    title: 'Ton Store',
    headerStyle: {
      backgroundColor: '#48f924',
    },
    headerTintColor: '#20252a',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => (
      <HeaderCartButton onPress={() => navigation.navigate('Cart')} />
    ),
  };
};
const App = (): ReactNode => {
  return (
    <CartProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={({navigation}) => headerOptions({navigation} as Props)}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={({navigation}) => headerOptions({navigation} as Props)}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={({navigation}) => headerOptions({navigation} as Props)}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </CartProvider>
  );
};

export default App;
