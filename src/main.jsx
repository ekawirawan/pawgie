import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/reset.css";
import "../src/styles/index.css";
import App from "./App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
