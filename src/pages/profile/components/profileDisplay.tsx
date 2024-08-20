import { useQuery } from "@tanstack/react-query";
import { viewProfileData } from "../../../apiCalls";

const ProfileDisplay = () => {
  const { data: profileData } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      const apiData = await viewProfileData();
      return apiData;
    },
  });

  return (
    <div className="profileDisplay">
      <div className="pd-Top">
        <img src="/profile/profileBanner.png" alt="" />
        <div className="profileIcon">
          <img src={profileData?.image || "/profile/user.png"} alt="" />
        </div>
      </div>
      <div className="pd-bottom">
        <div className="pdb-name">
          <h3>
            {profileData?.firstName} {profileData?.lastName}
          </h3>

          <h4>@{profileData?.username}</h4>
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
    </div>
  );
};

export default ProfileDisplay;
