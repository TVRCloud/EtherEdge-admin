import { GiAbstract111 } from "react-icons/gi";

import NestedSidebar from "./components/Navigations";

const SideBar = () => {
  return (
    <div className="p-4 h-full">
      <div className="bg-primary-bg flex flex-col justify-between h-full gap-2 px-6 py-4 rounded-[20px] min-h-[100%] max-h-[100%]">
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
