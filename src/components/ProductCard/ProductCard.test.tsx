import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  Image,
} from 'native-base';
import {ProductType} from '../../types/ProductType';
import React from 'react';
type ProductCardProps = {
  product: ProductType;
  onPress: () => void;
};

function ProductCard(props: ProductCardProps) {
  const {product, onPress} = props;
  return (
    <Box w="1/2" p="1" key={product.id}>
      <Box
        onTouchStart={() => onPress()}
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box>
          <AspectRatio w="100%" ratio={3 / 4}>
            <Image
              source={{
                uri: product.image,
              }}
              width="auto"
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {product.title.substring(0, 20)}
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
              {product.category}
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
                {product.price}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}

export default ProductCard;
