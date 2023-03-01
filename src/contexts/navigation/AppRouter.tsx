import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from '../layout';
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";

import pathsApp from "./pathsApp";

const AppRouter = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path={pathsApp.home}>
          <HomePage />
        </Route>
        <Route path={pathsApp.catalog}>
          <CatalogPage />
        </Route>
        <Route path={pathsApp.cart}>
          <CartPage />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default AppRouter;
