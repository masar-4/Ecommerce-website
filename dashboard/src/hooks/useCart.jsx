import { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartContext";
function useCart() {
  const context = useContext(CartContext);
  return context;
}
export { useCart };
