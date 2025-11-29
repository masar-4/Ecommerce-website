import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import route from "./Routers/router";

export default function App() {
  useEffect(function () {
    function handlePageTitle() {
      return (document.title = "DeckedOut");
    }
    handlePageTitle();
  }, []);

  return <RouterProvider router={route} />;
}
