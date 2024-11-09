import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  profileImage: string;
  username: string;
  gender: string;
  email: string;
  role: string;
  isVerified: boolean;
}

const useUserDetails = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/user");
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  return { user, loading, error };
};

export default useUserDetails;
