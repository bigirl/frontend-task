import { Tooltip } from "@mui/material";
import React, { useCallback, useMemo } from "react";

import { GetKeyRow, TableColumn } from "../../tools/ui_components/Table/types";
import { CloseIcon } from "../../tools/icons";

import { CartProduct } from "../product/types";

import USDollar from '../../tools/helpers/currencyConverter';

interface Props {
  onAddItem: (item: CartProduct) => void;
  onRemoveItem: (item: CartProduct) => void;
  onClearItem: (item: CartProduct) => void;
}

function useCatalogTable({ onAddItem, onRemoveItem, onClearItem }: Props) {
  const columns: TableColumn<CartProduct>[] = useMemo(
    () => [
      {
        key: "image",
        title: "Image",
        renderCell: (item) => (
          <img
            alt=""
            src={item.image}
            style={{ width: 60, objectFit: "contain" }}
          />
        ),
      },
      {
        key: "title",
        title: "Title",
        renderCell: (item) => <a>{item.title}</a>,
      },
      {
        key: "price",
        title: "Price",
        renderCell: (item) => <a>{USDollar.format(item.price)}</a>,
      },
      {
        key: "id",
        title: "Quantity",
        renderCell: (item) => (
          <div>
            <button onClick={() => onRemoveItem(item)}>-</button>
            <a>{item.count}</a>
            <button onClick={() => onAddItem(item)}>+</button>
          </div>
        ),
      },
      {
        key: "total",
        title: "Total",
        renderCell: (item) => <a>{USDollar.format(item.total)}</a>,
      },
      {
        key: "action",
        title: "",
        renderCell: (item) => (
          <div style={{ cursor: "pointer" }} onClick={() => onClearItem(item)}>
            <Tooltip title={"Remove from Cart"}>
              <CloseIcon />
            </Tooltip>
          </div>
        ),
      },
    ],
    [onAddItem, onRemoveItem, onClearItem]
  );

  const getKeyRow: GetKeyRow<CartProduct> = useCallback(
    (item) => item.id.toString(),
    []
  );

  return {
    columns,
    getKeyRow,
  };
}

export default useCatalogTable;
