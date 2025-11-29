import { useEffect, useRef, useState } from "react";
import { useCart } from "../../../hooks/useCart";
import styles from "./SearchDrawer.module.css";
import { Link } from "react-router-dom";
export default function SearchDrawer() {
  const { searchIsOpen, setSearchIsOpen } = useCart();
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const searchInput = useRef();
  const noSearchedProducts = searchedProducts.length;
  useEffect(() => {
    searchInput.current.focus();
  }, [searchIsOpen]);
  useEffect(
    function () {
      async function getProducts() {
        try {
          const res = await fetch("http://localhost:4000/api/products");
          if (!res.ok) throw new Error("Error 404 :Failed to fetch products");
          const data = await res.json();
          const allProducts = data.data;
          console.log(query);
          if (query === "") return;
          const NewProducts = allProducts.filter((p) =>
            p.name?.toLowerCase().includes(query.toLowerCase())
          );
          setSearchedProducts(NewProducts);
        } catch (error) {
          setErrMsg(error.message);
        }
      }
      getProducts();
    },
    [query]
  );
  return (
    <div
      className={`${styles.searchDrawer} ${
        searchIsOpen ? "showDrawer" : "hideDrawer"
      }`}
    >
      {/* initial-state */}
      <div className={styles.searchHeader}>
        <input
          type="search"
          placeholder="Search for anything"
          ref={searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <i
          className="fa-solid fa-xmark"
          onClick={() => setSearchIsOpen((searchIsOpen) => !searchIsOpen)}
        ></i>
      </div>
      {/* search products */}

      {noSearchedProducts > 0 && query !== "" && errMsg === "" && (
        <div className="search-products">
          <p className="text-center text-capitalize py-4 search-head">
            products
          </p>
          {searchedProducts.map((product) => (
            <SearchedProduct
              key={product._id}
              product={product}
              setSearchedProducts={setSearchedProducts}
              setQuery={setQuery}
            />
          ))}
        </div>
      )}
      {noSearchedProducts === 0 && query !== "" && errMsg === "" && (
        <div
          className={`${styles.noProductFound} d-flex flex-column align-items-center`}
        >
          <p>no products found</p>
        </div>
      )}
      {errMsg !== "" && (
        <div className={`errdiv d-flex justify-content-center  align-items-center mt-5 pt-5`}>
          <h6 className={styles.errmsg}>Error 404 :Failed to fetch products</h6>
        </div>
      )}
    </div>
  );
}
function SearchedProduct({ product, setSearchedProducts, setQuery }) {
  const { setSearchIsOpen } = useCart();
  function handleClick() {
    setSearchIsOpen((searchIsOpen) => !searchIsOpen);
    setSearchedProducts([]);
    setQuery("");
  }
  return (
    <div className="wrapper row mb-3 align-items-center gap-2">
      <div className="search-product-img col-3">
        <img src={product.img} alt={product.name} className="img-fluid" />
      </div>
      <div className="product-details-search col-6 row align-items-center gap-4">
        <div className={styles.productName}>
          <h6>
            <Link to={`/product/${product._id}`} onClick={handleClick}>
              {product.name}
            </Link>
          </h6>
          <div className="product-price d-flex gap-5 align-items-center">
            <span className="oldPrice">{product.oldPriceText}</span>
            <span className="newPrice">{product.newPriceText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
