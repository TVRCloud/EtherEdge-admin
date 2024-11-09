import VerifyIcon from "../../assets/icons/verifyIcon";
import useUserDetails from "../../utils/useUserDetails";

const Profile = () => {
  const { user: user } = useUserDetails();
  const defaultImage =
    user?.gender === "male"
      ? "/assets/placeholder/userMale1.png"
      : "/assets/placeholder/userFemale1.png";

  return (
    <div>
      <div className="w-full h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] bg-[url('/assets/profile/profileBanner.webp')] bg-cover bg-no-repeat rounded-[16px] relative">
        <div className="bg-main-bg dark:bg-dark-main-bg p-2 h-[140px] w-[140px] rounded-full overflow-hidden absolute bottom-[-70px] left-1/2 transform -translate-x-1/2">
          <img src={user?.profileImage || defaultImage} alt="profile" />
        </div>
      </div>

      <div className="mt-[80px] flex flex-col items-center">
        <h2>
          {user?.name}{" "}
          {user?.isVerified && (
            <span className="text-green-500">
              <VerifyIcon />
            </span>
          )}{" "}
        </h2>
      </div>
    </div>
  );
};

export default Profile;
