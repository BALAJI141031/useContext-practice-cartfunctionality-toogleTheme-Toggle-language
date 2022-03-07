const { createContext, useContext, useState } = require("react");

const CartContext = createContext({ items: 0 });

const CartProvider = ({ children }) => {
  // all set state things are at oneplace
  const [item, setItem] = useState(0);
  const addToCart = () => setItem((item) => item + 1);

  return (
    <CartContext.Provider value={{ item, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
