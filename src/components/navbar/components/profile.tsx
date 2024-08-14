import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { viewProfileData } from "../../../apiCalls";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../redux/userRedux";

const ProfileDropdown = () => {
  const [profileData, setProfileData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const apiData = await viewProfileData();
        setProfileData(apiData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile();
  }, []);

  //   useEffect(() => {
  //     if (!profileData) {
  //       window.location.reload();
  //     }
  //   }, [profileData]);

  console.log("profileData", profileData);

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
