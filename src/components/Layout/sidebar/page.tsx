import React from "react";
import { GiAbstract111 } from "react-icons/gi";

import NestedSidebar from "./components/Navigations";
import { Button } from "../../ui/button";

const SideBar = () => {
  return (
    <div className="p-4 h-full hidden xl:block">
      <div className="bg-primary-bg dark:bg-dark-primary-bg flex flex-col justify-between h-full gap-2 px-6 py-4 rounded-[20px] min-h-[100%] max-h-[100%]">
        <div>
          <div className="flex justify-center py-9">
            <GiAbstract111 size={80} />
          </div>
          <div>
            <NestedSidebar initialActivePath="/dashboard" />
          </div>
        </div>

        {/* footer */}
        <div className="flex justify-center flex-col gap-9 mb-8">
          <div className="w-full bg-gradient-to-b from-[#7450fe] to-[#3513dc] text-white flex flex-col gap-1 justify-center items-center p-6 rounded-[24px]">
            <h3 className="text-2xl font-bold">Title</h3>
            <h4 className="text-justify">Subtitle</h4>
            <Button className="bg-[#e6faf5] text-[#01b574] h-min py-1 px-3 rounded-full">
              dgsdg
            </Button>
          </div>

          {/* avatar */}
          <div className="flex gap-3 items-center ">
            <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/300"
                alt="profile-avatar"
                className="cover "
              />
            </div>
            <div>
              <h3 className="font-bold">John Doe</h3>
              <h4 className="text-sm">Admin</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
