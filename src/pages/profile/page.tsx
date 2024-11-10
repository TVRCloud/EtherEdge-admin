import VerifyIcon from "../../assets/icons/verifyIcon";
import {
  ClipboardIconButton,
  ClipboardRoot,
} from "../../components/ui/clipboard";
import useUserDetails from "../../utils/useUserDetails";

const Profile = () => {
  const { data, isLoading } = useUserDetails();

  const defaultImage =
    data?.user?.gender === "male"
      ? "/assets/placeholder/userMale1.png"
      : "/assets/placeholder/userFemale1.png";

  return (
    <div className="bg-primary-bg dark:bg-dark-main-bg rounded-t-[16px] min-h-screen">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="w-full h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] bg-[url('/assets/profile/profileBanner.webp')] bg-cover bg-no-repeat rounded-[16px] relative">
            <div className="bg-main-bg dark:bg-dark-main-bg p-2 h-[140px] w-[140px] rounded-full overflow-hidden absolute bottom-[-70px] left-1/2 transform -translate-x-1/2">
              <img
                src={data?.user?.profileImage || defaultImage}
                alt="profile"
              />
            </div>
          </div>

          <div className="mt-[80px] flex flex-col items-center gap-2">
            <h2 className="text-5xl font-semibold flex items-center gap-2 text-text-primary dark:text-dark-text-primary">
              {data?.user?.fullName ?? data?.user?.username}
              {data?.user?.isVerified && (
                <span className="text-green-500">
                  <VerifyIcon height="30px" width="30px" />
                </span>
              )}
            </h2>

            <ClipboardRoot
              value={data?.user?._id}
              className="flex items-center text-text-secondary dark:text-dark-text-secondary"
            >
              <p>{data?.user?._id}</p>
              <ClipboardIconButton />
            </ClipboardRoot>

            <p>{data?.user?.email}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
