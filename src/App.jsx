import {} from "react";
// import "./styles.css";
import { Cart } from "./cart";
import { ProductListing } from "./products-listing";
import { SetThemes } from "./theme";
import { useTheme } from "./theme-context";
import { Languages } from "./language";
import { useLanguage } from "./language-context";

export default function App() {
  const { theme } = useTheme();
  const { language, languagesList } = useLanguage();

  return (
    <div
      className="App"
      style={
        theme
          ? { backgroundColor: "white", color: "black" }
          : { backgroundColor: "black", color: "white" }
      }
    >
      <SetThemes />
      <Languages />
      <h1 className="app-header">
        {language === "english" ? "eCommerce" : languagesList[0].head}
      </h1>
      <div className="app-body">
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
