import "moment/locale/ru";
import "antd/dist/antd.css";
import "./resources/css/base.css";

import { ConfigProvider } from "antd"; // or 'antd/dist/antd.css'
import ruRU from "antd/es/locale/ru_RU";
import moment from "moment";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "./api/redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

moment.locale("ru");
const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider locale={ruRU}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
