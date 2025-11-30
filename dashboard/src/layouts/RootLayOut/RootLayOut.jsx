import { Outlet } from "react-router-dom";
import AllOverlay from "../../Components/OverLay/AllOverlay/AllOverlay";
import CartDrawer from "../../Components/Drawers/CartDrawer/CartDrawer";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import SearchDrawer from "../../Components/Drawers/SearchDrawer/SearchDrawer";
import MenuDrawer from "../../Components/Drawers/MenuDrawer/MenuDrawer";
import { useCart } from "../../hooks/useCart";
export default function RootLayOut() {
  const { cartIsOpen, searchIsOpen, menuIsOpen } = useCart();
  return (
    <>
      <ScrollToTop />
      <CartDrawer />
      <SearchDrawer />
      <MenuDrawer />
      {(cartIsOpen || searchIsOpen || menuIsOpen) && <AllOverlay />}
      <Outlet />
    </>
  );
}
