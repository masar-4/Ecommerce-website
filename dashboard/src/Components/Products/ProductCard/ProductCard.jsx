import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
export default function ProductCard({ product }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <div className={styles.productCard}>
        <Link to={`/tees/${product._id}`}>
          <span className={styles.saleBadge}>SALE</span>
          <img
            src={product.img}
            className={`card-img-top ${styles.productImg} `}
            alt={product.name}
          />
          <div className={`${styles.cardBody} d-flex flex-column gap-2`}>
            <p className={`text-uppercase text-muted mb-1 ${styles.small} `}>
              Decked Out
            </p>
            <h6 className="card-title fw-bold">{product.name}</h6>
            <p className="d-flex align-items-center gap-3 ">
              <span className={styles.oldPrice}>{product.oldPriceText}</span>
              <span className={styles.newPrice}>{product.newPriceText}</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
