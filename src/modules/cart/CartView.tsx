import React from "react";

import { LoadingSpinner, Table } from "../../tools/ui_components";

import useCart from "./useCart";
import StyledCartView from "./StyledCartView";

const CartView = () => {
  const { isLoading, cart, columns, getKeyRow } = useCart();

  return (
    <StyledCartView>
      <div className="CartView__header">
        <h1>Cart Page</h1>
      </div>

      <div className="CartView__grid">
        <Table columns={columns} data={cart} getKeyRow={getKeyRow} />
      </div>

      <LoadingSpinner isVisible={isLoading} />
    </StyledCartView>
  );
};

export default CartView;
