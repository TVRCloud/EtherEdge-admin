import EditProfileImage from "@components/profile/EditProfileImage";
import EditProfileBasicDetails from "@components/profile/EditProfileBasicDetails";
import useUserDetails from "@utils/useUserDetails";

const EditProfile = () => {
  const { data, isLoading } = useUserDetails();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-3">
        <EditProfileImage data={data} />
        <EditProfileBasicDetails data={data} />
      </div>
    </div>
  );
};

export default EditProfile;
