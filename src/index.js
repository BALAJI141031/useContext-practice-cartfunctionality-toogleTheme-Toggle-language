import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartProvider } from "./cart-context";
import { ThemeProvider } from "./theme-context";
import { LanguageProvider } from "./language-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
