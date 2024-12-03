import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProviderWrapper } from "./components/FavoritesContext.jsx";
import { ShoppingCartProviderWrapper } from "./components/ShoppingCartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProviderWrapper>
        <ShoppingCartProviderWrapper>
          <App />
        </ShoppingCartProviderWrapper>
      </FavoritesProviderWrapper>
    </BrowserRouter>
  </StrictMode>
);
