import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { persistor } from "./redux/store";
import  store from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from "react-dom/client";
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
