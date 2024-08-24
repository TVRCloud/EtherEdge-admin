import { useDispatch } from "react-redux";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../redux/userRedux";

const ProfileDropdown = () => {
  const dispatch = useDispatch();

  return (
    <Menu>
      <MenuButton
        as={Button}
        aria-label="Profile"
        className="profile-button"
        title="Profile"
        width={"100px"}
      >
        {/* <img src={profileData?.image || "/profile/user.png"} alt="user profile" /> */}
        <img src="/profile/user.png" alt="user profile" />
      </MenuButton>
      <MenuList className="profile-list">
        <MenuItem className="greeting-btn">👋 Hey User</MenuItem>
        <Link
          style={{ textDecoration: "none", color: "initial" }}
          to={"/profile"}
        >
          <MenuItem className="edit-btn">Profile Settings</MenuItem>
        </Link>
        <MenuItem className="edit-btn">Newsletter Settings</MenuItem>
        <MenuItem className="logout-btn" onClick={() => dispatch(logoutUser())}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileDropdown;
