import { useProfile } from "@/contexts/ProfileContext";
import { useRouter } from "expo-router";
import { useEffect } from "react";

// Hook that redirects to index if there is no profile after initialization
export const useRequireProfile = () => {
  const { profile, initialized } = useProfile();
  const router = useRouter();

  useEffect(() => {
    if (initialized && !profile) {
      router.replace("/");
    }
  }, [initialized, profile, router]);
};

export default useRequireProfile;
