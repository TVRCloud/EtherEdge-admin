import { Outlet } from "react-router-dom";
import SideBar from "../components/Layout/sidebar/page";
import Navbar from "../components/Layout/navbar/page";

export default function Root() {
  return (
    <div className="flex gap-2 min-h-screen bg-main-bg overflow-hidden">
      <div className="w-[18%] hidden xl:block max-h-screen">
        <SideBar />
      </div>
      <div className="w-full xl:w-[82%] max-h-screen overflow-auto hide-scrollbar">
        <div className="fixed z-50 w-full xl:w-[82%] pt-4 px-2 xl:px-0 xl:pr-4">
          <Navbar />
        </div>

        <div className="pl-1 pr-4 pt-[100px]">
          <Outlet />
        </div>
        <div> {/* <Footer /> */}</div>
      </div>
    </div>
  );
}
