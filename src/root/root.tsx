import { Outlet } from "react-router-dom";
import SideBar from "../components/Layout/sidebar/page";

export default function Root() {
  return (
    <div className="flex gap-2 min-h-screen bg-main-bg dark:bg-dark-main-bg">
      <div className="w-[18%]">
        <SideBar />
      </div>
      <div>
        <div> {/* <Navbar /> */}</div>

        <div>
          <Outlet />
        </div>
        <div> {/* <Footer /> */}</div>
      </div>
    </div>
  );
}
