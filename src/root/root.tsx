import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="RootContainer">
      <div className="Sidebar">{/* <Sidebar /> */}</div>
      <div className="MainBody">
        <div className="header">{/* <Navbar /> */}</div>

        <div className="content">
          <Outlet />
        </div>
        <div className="footer">{/* <Footer /> */}</div>
      </div>
    </div>
  );
}
