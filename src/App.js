
import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;