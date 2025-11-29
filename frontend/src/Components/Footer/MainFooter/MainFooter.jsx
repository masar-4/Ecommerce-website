import { Link } from "react-router-dom";
import styles from "./MainFooter.Module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="wrapper row gap-5">
          <div className="support-side col-12 col-lg-3 py-3">
            <h5 className="text-center text-md-start">SUPPORT</h5>
            <ul className="row  justify-content-md-start list-unstyled flex-md-column my-4">
              <li className="col-4 col-md-12 d-flex justify-content-center justify-content-md-start">
                <Link to="/policy">Return Policy</Link>
              </li>
              <li className="col-4 col-md-12 d-flex justify-content-center justify-content-md-start">
                <Link to="/delivery">Delivery</Link>
              </li>
              <li className="col-4 col-md-12 d-flex justify-content-center justify-content-md-start">
                <Link to="/contact">Contact Info</Link>
              </li>
            </ul>
          </div>
          {/* <div className="newsletter col-12 col-lg-4 py-3 d-flex flex-column align-items-center align-items-md-start">
            <h4 className="text-md-start text-center">NEWSLETTER</h4>
            <p className="text-center text-md-start">
              Sign up for our newsletter to receive exclusive offers
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2"
            />
          </div> */}
        </div>
        <div className="copyright">
          <span>© 2025 DEPI. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
