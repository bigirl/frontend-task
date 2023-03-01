import React from "react";
import SearchTextbox from "../search";

import { LoadingSpinner, Table } from "../../tools/ui_components";

import useCatalog from "./useCatalog";
import StyledCatalogView from "./StyledCatalogView";

const CatalogView = () => {
  const { isLoading, products, columns, getKeyRow } = useCatalog();

  return (
    <StyledCatalogView>
      <div className="CatalogView__header">
        <h1>Catalog Page</h1>
      </div>

      <div className="CatalogView__search">
        <SearchTextbox />
      </div>

      <div className="CatalogView__grid">
        <Table columns={columns} data={products} getKeyRow={getKeyRow} />
      </div>

      <LoadingSpinner isVisible={isLoading} />
    </StyledCatalogView>
  );
};

export default CatalogView;
