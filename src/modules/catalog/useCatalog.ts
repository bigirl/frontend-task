import { useCallback, useEffect, useState } from "react";

import { API } from "../../contexts/api";
import useFlag from "../../tools/hooks/useFlag";

import { useAppDispatch } from "../../store/hooks";
import { increment } from "../common/counter/counterSlice";
import { useAppSelector } from '../../store/hooks';
import {selectTerm} from '../search/searchTermSlice';
import { CatalogProduct } from "../product/types";

import useCatalogTable from "./useCatalogTable";

const useCatalog = () => {
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [isLoading, onStartLoading, onEndLoading] = useFlag(true);
 
  const term = useAppSelector(selectTerm);
  const dispatch = useAppDispatch();

  const handleAddProductToCart = useCallback((product: CatalogProduct) => {
    // TODO
    console.log("handleAddProductToCart");
    console.log("product", product);
    
    dispatch(increment());
  }, []);

  const { columns, getKeyRow } = useCatalogTable({
    onAddItem: handleAddProductToCart,
  });

  useEffect(
    () => {
      //TODO: use Redux Persist
      const products = sessionStorage.getItem("products");
     
      if (products == null) {
        API.product.getAll().then((products) => {
          setProducts(products);
          sessionStorage.setItem("products", JSON.stringify(products));
        }).finally(onEndLoading);
      } else {
        let productsTemp = JSON.parse(products);

        if(term !== "") {
          productsTemp = productsTemp.filter((item: {
            id: any; title: string 
}) => item.title.toLowerCase().includes(term) || item.id.toString().includes(term));
        } 
        setProducts(productsTemp);
        onEndLoading();
      }
      
    },
    [term] // eslint-disable-line
  );

  return {
    isLoading,
    products,
    columns,
    getKeyRow,
  };
};

export default useCatalog;
