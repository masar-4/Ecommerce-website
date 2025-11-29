import styles from "./TeeProducts.module.css";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function TeeProducts() {
  const [TeeProducts, setTeeProducts] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  useEffect(function () {
    async function getProducts() {
      try {
        const res = await fetch("http://localhost:4000/api/products");
        if (!res.ok) throw new Error("Error 404 :Failed to fetch products");
        const data = await res.json();
        const NewTeeProducts = data.data.filter(
          (product) => product.category === "T-Shirts"
        );

        setTeeProducts(NewTeeProducts);
      } catch (error) {
        setErrMsg(error.message);
      }
    }
    getProducts();
  }, []);
  return errMsg !== "" ? (
    <div className="d-flex justify-content-center">
      <h4 className={styles.errmsg}>Error 404 :Failed to fetch products</h4>
    </div>
  ) : (
    <div className="row g-4 border-bottom">
      {TeeProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
