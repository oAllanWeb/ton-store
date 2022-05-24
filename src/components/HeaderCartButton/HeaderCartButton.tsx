import * as React from 'react';

import {Entypo} from '@expo/vector-icons';
import {Badge, Icon, IconButton} from 'native-base';
import useCart from '../../screens/Cart/hooks/useCart';

type Props = {onPress: () => void};

function HeaderCartButton({onPress}: Props) {
  const {cartCount} = useCart();
  return (
    <IconButton
      onPress={() => onPress()}
      icon={
        <>
          <Badge colorScheme="info" variant="solid" rounded="xl">
            {cartCount}
          </Badge>
          <Icon as={Entypo} color="#20252a" name="shopping-cart" />
        </>
      }
    />
  );
}

export default HeaderCartButton;
