import { IoCloudDoneOutline } from "react-icons/io5";
import ProfileDisplay from "./components/profileDisplay";
import "./profile.scss";
import StorageBar from "./components/storageBar";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { viewProfileData } from "../../apiCalls";

const Profile = () => {
  const navigate = useNavigate();

  const { data: profileData } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      const apiData = await viewProfileData();
      return apiData;
    },
  });

  return (
    <div className="Profile">
      <div className="ProfileTopContainer">
        <ProfileDisplay profileData={profileData} />
        <div className="systemStorage">
          <div className="systemStorage-top">
            <div className="sysS-icon">
              <IoCloudDoneOutline />
            </div>
            <h2>Your Storage</h2>
            <p>Supervise your drive space in the easiest way</p>
          </div>
          <div className="systemStorage-bar">
            <StorageBar storageUsed={30} storageTotal={100} />
          </div>
        </div>
      </div>

      <div className="profileOtherInfo">
        <div className="profileOtherInfo-container">
          <h2>Complete Your Profile</h2>
          <p>
            Stay on the pulse of distributed projects with an online whiteboard
            to plan, coordinate and discuss
          </p>
          <div className="poiBtn">
            <button
              onClick={() => {
                navigate("/profile/editProfile");
              }}
              title="Complete Profile"
            >
              Complete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
