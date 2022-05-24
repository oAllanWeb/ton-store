import {Heading, HStack, Spinner, View} from 'native-base';
import React from 'react';

function Loading() {
  return (
    <View h="100%" justifyContent="center" alignItems="center">
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="emerald.500" fontSize="md">
          Carregando...
        </Heading>
      </HStack>
    </View>
  );
}

export default Loading;
