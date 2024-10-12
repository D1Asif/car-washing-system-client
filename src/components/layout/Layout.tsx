import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />
      <div className="px-8 md:px-24 my-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
