"use client";

import VerifyIcon from "@assets/icons/verifyIcon";
import { Form } from "@components/ui/form";
import LoadingSpinner from "@components/ui/loadingSpinner";
import { useMutation } from "@tanstack/react-query";

import { updateProfileImage } from "apiCalls";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

interface data {
  user: {
    _id: string;
    fullName: string;
    profileImage: string;
    username: string;
    gender: string;
    email: string;
    role: string;
    isVerified: boolean;
    dob: string;
    type: string;
    phone: string;
    image: string;
    lastLogin: string;
    state: string;
  };
}

type Props = {
  data: data | undefined;
};

const EditProfileImage = ({ data }: Props) => {
  const form = useForm({
    resolver: undefined,
    defaultValues: {
      name: "",
    },
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const defaultImage =
    data?.user?.gender === "male"
      ? "/assets/placeholder/userMale1.png"
      : "/assets/placeholder/userFemale1.png";

  const editProfileImageMutation = useMutation({
    mutationKey: ["edit-Profile-Image"],
    mutationFn: async (formData: FormData) => {
      const response = await updateProfileImage(formData);
      return response.json();
    },
  });

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Create FormData and append the file
      const formData = new FormData();
      formData.append("profileImage", file);

      // Call the mutation
      setIsUploading(true);
      editProfileImageMutation.mutate(formData, {
        onSuccess: () => {
          setIsUploading(false);
          // Handle success (e.g., show a success message)
        },
        onError: (error) => {
          setIsUploading(false);
          // Handle error (e.g., show an error message)
          console.error("Failed to update profile image:", error);
        },
      });
    }
  };

  return (
    <div className="bg-primary-bg p-5 rounded-[20px]">
      <Form {...form}>
        <form>
          <div className="w-full h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] bg-[url('/assets/profile/profileBanner.webp')] bg-cover bg-no-repeat rounded-[16px] relative">
            <div
              className="bg-main-bg p-2 h-[140px] w-[140px] rounded-full overflow-hidden absolute bottom-[-70px] left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={handleImageClick}
            >
              <img
                src={previewImage || data?.user?.profileImage || defaultImage}
                alt="profile"
                className="h-full w-full rounded-full object-cover"
              />
              {isUploading && <LoadingSpinner />}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </form>
      </Form>
      <div className="pt-[74px] flex justify-center">
        <h1 className="text-2xl font-bold flex items-center">
          {data?.user?.username}{" "}
          <span>
            <VerifyIcon
              height="30px"
              width="30px"
              color={data?.user?.isVerified ? "#3965ff" : "#89A8B2"}
            />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default EditProfileImage;
