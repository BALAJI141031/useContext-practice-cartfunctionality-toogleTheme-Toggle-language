import { useCart } from "./cart-context";
import { useLanguage } from "./language-context";
function Cart() {
  const { item } = useCart();
  const { language, languagesList } = useLanguage();

  return (
    <h1>
      {language === "english" ? `Items in cart` : languagesList[0].cartDes}
      {item}
    </h1>
  );
}

export { Cart };
