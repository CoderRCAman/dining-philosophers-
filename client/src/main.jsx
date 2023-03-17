import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {CartContextProvider} from "./context/CartContext"
import {UserContextProvider} from "./context/UserContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <CartContextProvider>
        <App/>
      </CartContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
