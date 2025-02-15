import { Link } from "react-router-dom";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../../../ui/menu";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../../redux/userRedux";

const NavProfileItem = [
  {
    title: "Profile Settings",
    value: "profileSettings",
    link: "/profile",
  },
  {
    title: "Newsletter Settings",
    value: "newsletterSettings",
    link: "/newsletter",
  },
];

const NavProfile = () => {
  const dispatch = useDispatch();
  return (
    <MenuRoot>
      <MenuTrigger>
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://i.pravatar.cc/300?img=1"
            alt="avatar"
          />
        </div>
      </MenuTrigger>
      <MenuContent className="w-60 mt-4 rounded-[16px] bg-gradient-to-b from-primary-bg to-main-bg">
        <div className="p-4 border-b-2">
          <h3>Hey Sara</h3>
        </div>

        <div className="my-3 px-4">
          {NavProfileItem.map((item, index) => (
            <Link key={index} to={item.link}>
              <MenuItem
                value={item.value}
                className="px-2 py-3 rounded-[14px] cursor-pointer"
              >
                {item.title}
              </MenuItem>
            </Link>
          ))}
          <MenuItem
            value="logout"
            className="px-2 py-3 rounded-[14px] cursor-pointer text-danger"
            onClick={() => dispatch(logoutUser())}
          >
            Logout
          </MenuItem>
        </div>
      </MenuContent>
    </MenuRoot>
  );
};

export default NavProfile;
