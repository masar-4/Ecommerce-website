import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// ✅ Import Bootstrap CSS & JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Import Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { CartProvider } from "./Context/CartContext/CartContext.jsx";

// import "./responsive.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
  </React.StrictMode>
);
