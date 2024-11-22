import EditProfileImage from "@components/profile/EditProfileImage";
import EditProfileBasicDetails from "@components/profile/EditProfileBasicDetails";

const EditProfile = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <EditProfileImage />
      <EditProfileBasicDetails />
    </div>
  );
};

export default EditProfile;
