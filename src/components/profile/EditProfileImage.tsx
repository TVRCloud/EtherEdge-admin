"use client";

import { Form } from "@components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { updateProfileImage } from "apiCalls";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

const EditProfileImage = () => {
  const data = {
    user: { gender: "male", profileImage: "" },
  };
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
    <div>
      <Form {...form}>
        <form>
          <div className="w-full h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] bg-[url('/assets/profile/profileBanner.webp')] bg-cover bg-no-repeat rounded-[16px] relative">
            <div
              className="bg-main-bg dark:bg-dark-main-bg p-2 h-[140px] w-[140px] rounded-full overflow-hidden absolute bottom-[-70px] left-1/2 transform -translate-x-1/2 cursor-pointer relative"
              onClick={handleImageClick}
            >
              <img
                src={previewImage || data?.user?.profileImage || defaultImage}
                alt="profile"
                className="h-full w-full rounded-full object-cover"
              />
              {isUploading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
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
    </div>
  );
};

export default EditProfileImage;
