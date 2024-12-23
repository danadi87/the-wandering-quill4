import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProviderWrapper } from "./components/FavoritesContext.jsx";
import { ShoppingCartProviderWrapper } from "./components/ShoppingCartContext.jsx";
import { BookProvider } from "./components/BookContext.jsx";
import "../src/styles/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProviderWrapper>
        <ShoppingCartProviderWrapper>
          <BookProvider>
            <App />
          </BookProvider>
        </ShoppingCartProviderWrapper>
      </FavoritesProviderWrapper>
    </BrowserRouter>
  </StrictMode>
);
