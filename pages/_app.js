import '../styles/globals.css'
import '../styles/general.css'
import { Provider } from "react-redux";
import store from "../store";
import React from "react";
import ReactDOM from "react-dom";

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
}

export default MyApp
