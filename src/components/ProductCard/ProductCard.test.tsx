import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ProductType} from '../../types/ProductType';
import ProductCard from './ProductCard';
import ProviderWrapper from '../../utils/ProviderWrapper';

describe('Testing product card', () => {
  const mockProduct = {
    id: 1,
    title: 'produto teste',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  } as ProductType;
  const mockFunction = jest.fn();
  it('render product card', () => {
    const {getByText} = render(
      <ProviderWrapper>
        <ProductCard product={mockProduct} onPress={mockFunction} />
      </ProviderWrapper>,
    );

    expect(getByText(mockProduct.title)).toBeTruthy();
  });
  it('product card click', () => {
    const {getByTestId} = render(
      <ProviderWrapper>
        <ProductCard product={mockProduct} onPress={mockFunction} />
      </ProviderWrapper>,
    );

    fireEvent.press(getByTestId('parssed-product-card'));
    expect(mockFunction).toHaveBeenCalled();
  });
});
