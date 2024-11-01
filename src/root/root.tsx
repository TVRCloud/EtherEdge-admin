import { Outlet } from "react-router-dom";
import SideBar from "../components/Layout/sidebar/page";

export default function Root() {
  return (
    <div className="flex gap-2 min-h-screen">
      <div className="w-[20%]">
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
