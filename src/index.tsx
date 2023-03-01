import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { store } from './store/store';
import "./index.css";

import AppRouter from "./contexts/navigation/AppRouter";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
