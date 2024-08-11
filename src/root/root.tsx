import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function Root() {
  return (
    <div className="RootContainer">
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="MainBody">
        <div className="header">
          <Navbar />
        </div>

        <div className="content">
          <Outlet />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
