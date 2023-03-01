import { useCallback, useEffect, useState } from "react";

import { API } from "../../contexts/api";

import { useAppDispatch } from "../../store/hooks";

import useFlag from "../../tools/hooks/useFlag";

import { increment, decrement } from "../common/counter/counterSlice";
import { CartProduct } from "../product/types";

import useCartTable from "./useCartTable";

const useCart = () => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [isLoading, onStartLoading, onEndLoading] = useFlag(true);

  const dispatch = useAppDispatch();

  const handleAddProductToCart = useCallback((cart: CartProduct) => {
    // TODO
    console.log("handleAddProductToCart");
    console.log("cart", cart);

    dispatch(increment());
  }, []);

  const handleRemoveProductFromCart = useCallback((cart: CartProduct) => {
    // TODO
    console.log("handleRemoveProductFromCart");
    console.log("cart", cart);
    dispatch(decrement());
  }, []);

  const handleClearProductFromCart = useCallback((cart: CartProduct) => {
    // TODO
    console.log("handleClearProductFromCart");
    console.log("cart", cart);
    //dispatch(decrement());
  }, []);

  const { columns, getKeyRow } = useCartTable({
    onAddItem: handleAddProductToCart,
    onRemoveItem: handleRemoveProductFromCart,
    onClearItem: handleClearProductFromCart,
  });

  useEffect(
    () => {
      //TODO: use Redux Persist
      const cartObj = sessionStorage.getItem("cart");
     
      if (cartObj == null) {
        // cart is empty
        onEndLoading();
      } else {
        setCart(JSON.parse(cartObj));
        onEndLoading();
      }
      
    },
    [] // eslint-disable-line
  );

  return {
    isLoading,
    cart,
    columns,
    getKeyRow,
  };
};

export default useCart;
