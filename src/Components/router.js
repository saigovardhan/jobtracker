import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PageNotfound from "../Pages/PageNotFound";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const router = createBrowserRouter([

  {element:<NavbarElement/> ,errorElement:<PageNotfound />, children:[
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  ]}
]);

function NavbarElement(){
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
