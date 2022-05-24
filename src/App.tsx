/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {ReactNode} from 'react';
import {Icon, IconButton, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './screens/Details/Details';
import {Entypo} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const App = (): ReactNode => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Ton Store',
              headerStyle: {
                backgroundColor: '#48f924',
              },
              headerTintColor: '#20252a',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <IconButton icon={<Icon as={Entypo} name="shopping-cart" />} />
              ),
            }}
          />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
