import Form from "../../../utils/Form";
import {
  changePasswordSchema,
  profileEditSchema,
  TChangePasswordSchema,
  TProfileEditSchema,
} from "../../../schema/profileSchema";
import { Button, Input, TextArea } from "../../../utils/formItems";
import { useMutation, useQuery } from "@tanstack/react-query";
import { editProfile, viewProfileData } from "../../../apiCalls";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const EditProfile = () => {
  const toast = useToast();
  const [isUpdating, setIsUpdating] = useState(false);

  const {
    data: profileData,
    isLoading,
    error,
    refetch: refetchProfileData,
  } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      const apiData = await viewProfileData();
      return apiData;
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: TProfileEditSchema) => {
      setIsUpdating(true);
      return editProfile(data);
    },
    onSuccess: (data) => {
      console.log("Profile updated successfully:", data);
      setIsUpdating(false);
      toast({
        title: "Profile updated.",
        description: "Your profile has been successfully updated.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      refetchProfileData();
    },
    onError: (error) => {
      console.error("Error updating profile:", error);
      setIsUpdating(false);
      toast({
        title: "Error updating profile.",
        description:
          "There was an error updating your profile. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      refetchProfileData();
    },
  });

  const handleSubmit = (data: TProfileEditSchema) => {
    mutation.mutate(data);
  };

  const handleChangePassword = (data: TChangePasswordSchema) => {
    console.log("Change password", data);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching profile data</p>;

  return (
    <div className="flex gap-5">
      <div className="w-1/2 flex flex-col gap-5">
        <div className="bg-white rounded-xl p-4">
          <h2 className="text-xl text-text font-[500]">Account Settings</h2>
          <p className="text-text2">
            Here you can change user account information
          </p>

          <Form<TProfileEditSchema>
            onSubmit={handleSubmit}
            schema={profileEditSchema}
          >
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div>
                <Input
                  name="email"
                  label="Email"
                  defaultValue={profileData?.email}
                  disabled
                />
              </div>
              <div>
                <Input
                  name="username"
                  label="Username"
                  defaultValue={profileData?.username}
                />
              </div>
              <div>
                <Input
                  name="firstName"
                  label="First Name"
                  defaultValue={profileData?.firstName}
                />
              </div>
              <div>
                <Input
                  name="lastName"
                  label="Last Name"
                  defaultValue={profileData?.lastName}
                />
              </div>
              <div className="col-span-2 mb-3">
                <TextArea
                  name="about"
                  label="About"
                  defaultValue={profileData?.about}
                />
              </div>
            </div>

            <Button
              size="responsive"
              type="submit"
              label="Submit"
              loading={isUpdating}
            />
          </Form>
        </div>

        <div className="bg-white rounded-xl p-4">
          <h2 className="text-xl text-text font-[500]">Change Password</h2>
          <p className="text-text2">Here you can set your new password</p>

          <Form<TChangePasswordSchema>
            schema={changePasswordSchema}
            onSubmit={handleChangePassword}
          >
            <div className="grid grid-cols-1 gap-2 mt-4">
              <div>
                <Input
                  name="oldPassword"
                  label="Old Password"
                  type="password"
                />
              </div>
              <div>
                <Input
                  name="newPassword"
                  label="New Password"
                  type="password"
                />
              </div>
              <div>
                <Input
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />
              </div>

              <Button
                size="responsive"
                type="submit"
                label="Submit"
                loading={isUpdating}
              />
            </div>
          </Form>
        </div>
      </div>

      <div className="w-1/2">
        <div className="bg-white rounded-xl p-4 h-full">
          <div className="border-dashed	border-2 h-full rounded-[14px] bg-[#f3f7f9`] flex justify-center items-center">
            <span className="text-text2 text-[18px] font-light">Coming Soon...!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
