import { createContext, useEffect, useState } from "react";
const CartContext = createContext();
function CartProvider({ children }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [CollectionIsOpen, setCollectionIsOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isTrash, setIsTrash] = useState(false);
  const [productCounter, setProductCounter] = useState(1);
  const noCartProducts = cartProducts.length;
  const TotalCheckOut = cartProducts.length
    ? cartProducts.reduce((acc, p) => acc + p.price * p.counter, 0)
    : 0;
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);
  function addToCart(product, newSelectedSize = "XS", counter = 1) {
    console.log(newSelectedSize);
    setCartIsOpen((cartIsOpen) => !cartIsOpen);
    setCartProducts((cartProducts) => {
      const exists = cartProducts.find(
        (p) => p.id === product._id && p.selectedSize === newSelectedSize
      );

      if (exists) {
        return cartProducts.map((p) =>
          p.id === product.id && p.selectedSize === newSelectedSize
            ? {
                ...p,
                id: product._id,
                counter: counter,
                oldPrice: p.oldPrice,
                selectedSize: newSelectedSize,
                totalProductPrice: counter * p.price,
              }
            : p
        );
      }

      return [
        ...cartProducts,
        {
          id: product._id,
          name: product.name,
          img: product.img,
          selectedSize: newSelectedSize,
          counter: counter,
          price: product.newPrice,
          oldPrice: product.oldPrice,
          totalProductPrice: product.newPrice * counter,
        },
      ];
    });
  }

  function handleUpdateCounter(id, newCounter, newSelectedSize) {
    setCartProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.selectedSize === newSelectedSize
          ? {
              ...p,
              counter: newCounter,
              totalProductPrice: p.price * newCounter,
            }
          : p
      )
    );
  }

  function onHandleTrashClick(id, newSelectedSize) {
    setCartProducts((cartProducts) =>
      cartProducts.filter(
        (product) =>
          !(product.id === id && product.selectedSize === newSelectedSize)
      )
    );
  }
  return (
    <CartContext.Provider
      value={{
        cartIsOpen: cartIsOpen,
        setCartIsOpen: setCartIsOpen,
        searchIsOpen: searchIsOpen,
        setSearchIsOpen: setSearchIsOpen,
        menuIsOpen: menuIsOpen,
        setMenuIsOpen: setMenuIsOpen,
        CollectionIsOpen: CollectionIsOpen,
        setCollectionIsOpen: setCollectionIsOpen,
        cartProducts: cartProducts,
        setCartProducts: setCartProducts,
        isTrash: isTrash,
        setIsTrash: setIsTrash,
        productCounter: productCounter,
        setProductCounter: setProductCounter,
        onHandleTrashClick: onHandleTrashClick,
        onHandleAddToCart: addToCart,
        noCartProducts: noCartProducts,
        TotalCheckOut: TotalCheckOut,
        handleUpdateCounter: handleUpdateCounter,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
