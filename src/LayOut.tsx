import { Outlet } from "react-router-dom";
import Footer from "./Pages/Footer";
import Navbar from "./Component/navBar/Navbar";

function Layout() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        {/* All your page content will render here */}
        <Outlet />
      </main>

      <footer>
        {/* <p>© 2024 My React App</p> */}
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
