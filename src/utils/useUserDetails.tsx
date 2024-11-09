import { useQuery } from "@tanstack/react-query";
import { viewProfileData } from "../apiCalls";

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

const useUserDetails = () => {
  const { data, isLoading, isError, error } = useQuery<data, Error>({
    queryKey: ["user"],
    queryFn: viewProfileData,
  });

  return { data, isLoading, error: isError ? error?.message : null };
};

export default useUserDetails;
