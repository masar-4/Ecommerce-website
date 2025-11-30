import HomePage from "../Pages/HomePage/HomePage"
import PolicyPage from "../Pages/PolicyPage/PolicyPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import TeesPage from "../Pages/TeesPage/TeesPage";
import DenimPage from "../Pages/DenimPage/DenimPage";
import DeliveryPage from "../Pages/Delivery Page/DeliveryPage";
import AllProductsPage from "../Pages/AllProductsPage/AllProductsPage";
import CartPage from "../Pages/CartPage/CartPage";
import ProductPage from "../Pages/ProductPage/ProductPage";
import CheckOutPage from "../Pages/CheckOutPage/CheckOutPage";
import { createBrowserRouter } from "react-router-dom";
import RootLayOut from "../layouts/RootLayOut/RootLayOut";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "policy", element: <PolicyPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "tees", element: <TeesPage /> },
      { path: "Denim", element: <DenimPage /> },
      { path: "delivery", element: <DeliveryPage /> },
      { path: "allproducts", element: <AllProductsPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckOutPage /> },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "tees/:id",
        element: <ProductPage />,
      },
      {
        path: "denim/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

export default route;
