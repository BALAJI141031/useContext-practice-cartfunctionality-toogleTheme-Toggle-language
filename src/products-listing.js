import { useCart } from "./cart-context";

function ProductListing() {
  const { addToCart } = useCart();
  return ["1", "2", "3", "4"].map((item) => (
    <div>
      <h2>Product {item}</h2>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  ));
}

export { ProductListing };
