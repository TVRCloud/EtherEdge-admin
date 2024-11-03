import { Outlet } from "react-router-dom";
import SideBar from "../components/Layout/sidebar/page";
import Navbar from "../components/Layout/navbar/page";

export default function Root() {
  return (
    <div className="flex gap-2 min-h-screen bg-main-bg dark:bg-dark-main-bg">
      <div className="w-[18%] hidden xl:block">
        <SideBar />
      </div>
      <div className="w-full xl:w-[82%]">
        <div>
          <Navbar />
        </div>

        <div>
          <Outlet />
        </div>
        <div> {/* <Footer /> */}</div>
      </div>
    </div>
  );
}
