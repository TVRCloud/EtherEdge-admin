import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { viewProfileData } from "../../../apiCalls";
import { Tooltip } from "@chakra-ui/react";
import Popup from "../../../assets/popup/popup";

const ProfileDisplay = () => {
  const [editProfilePopup, setEditProfilePopup] = useState(false);

  const { data: profileData } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      const apiData = await viewProfileData();
      return apiData;
    },
  });

  console.log(profileData);

  return (
    <div className="profileDisplay">
      <div className="pd-Top">
        <img src="/profile/profileBanner.png" alt="" />
        <Tooltip
          label="Edit Profile"
          aria-label="Edit Profile"
          placement="right-end"
          color={"#abb4cb"}
        >
          <div
            className="profileIcon"
            onClick={() => setEditProfilePopup(true)}
          >
            <img src={profileData?.image || "/profile/user.png"} alt="" />
          </div>
        </Tooltip>
      </div>
      <div className="pd-bottom">
        <div className="pdb-name" onClick={() => setEditProfilePopup(true)}>
          <Tooltip
            label="Edit Profile"
            aria-label="Edit Profile"
            placement="right"
            color={"#abb4cb"}
          >
            <h3>
              {profileData?.firstName} {profileData?.lastName}
            </h3>
          </Tooltip>
          <Tooltip
            label="Edit Profile"
            aria-label="Edit Profile"
            placement="right"
            color={"#abb4cb"}
          >
            <h4>@{profileData?.username}</h4>
          </Tooltip>
        </div>
        <div className="pdb-status">
          <div className="pbms pdbs-posts">
            <h2>16</h2>
            <p>Posts</p>
          </div>
          <div className="pbms pdbs-followers">
            <h2>16k</h2>
            <p>Followers</p>
          </div>
          <div className="pbms pdbs-following">
            <h2>6k</h2>
            <p>Following</p>
          </div>
        </div>
      </div>
      <Popup trigger={editProfilePopup} setTrigger={setEditProfilePopup}>
        {/* <ProfilePopup profileData={profileData} /> */}
      </Popup>
    </div>
  );
};

export default ProfileDisplay;
