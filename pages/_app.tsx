import React, { useState } from 'react';
import type { AppProps } from 'next/app';

import { BasketProduct, Product } from './types';
import { Basket } from '../components/Basket';

import '../styles/globals.css';

interface IBasketState {
  basket?: Array<BasketProduct>;
  addToCart: (p: Product) => () => void;
  removeFromCart: (p: Product) => () => void;
  toggleBasketModal: () => void;
}

export const BasketContext = React.createContext<IBasketState>({
  addToCart: () => () => {},
  removeFromCart: () => () => {},
  toggleBasketModal: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [basket, setBasket] = useState<Array<BasketProduct>>([]);
  const [basketVisible, setBasketVisible] = useState<boolean>(false);

  const lastOne = (id: number) =>
    basket.find((product) => product.productId === id)?.quantity === 1;

  const inBasket = (id: number) =>
    basket.map(({ productId }) => productId).includes(id);

  const removeFromCart =
    ({ id, name, price }: Product) =>
    () => {
      if (!inBasket(id)) return;
      lastOne(id)
        ? setBasket([...basket].filter((product) => product.productId !== id))
        : setBasket(
            [...basket].map((product) =>
              product.productId === id
                ? { ...product, quantity: product.quantity - 1 }
                : product
            )
          );
    };

  const addToCart =
    ({ id, name, price }: Product) =>
    () => {
      inBasket(id)
        ? setBasket(
            [...basket].map((product) =>
              product.productId === id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            )
          )
        : setBasket([...basket, { productId: id, name, price, quantity: 1 }]);
    };

  const toggleBasketModal = () => setBasketVisible(!basketVisible);

  return (
    <BasketContext.Provider
      value={{ basket, addToCart, removeFromCart, toggleBasketModal }}
    >
      <Component {...pageProps} />
      {basketVisible && <Basket />}
    </BasketContext.Provider>
  );
}

export default MyApp;
