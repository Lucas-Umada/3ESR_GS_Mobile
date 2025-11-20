import {
  loadProfile,
  loadProgress,
  saveProfile,
  addXp as storageAddXp,
} from "@/services/storage";
import { UserProfile, UserProgress } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ProfileContextValue {
  profile: UserProfile | null;
  progress: UserProgress | null;
  setProfile: (p: UserProfile) => Promise<void>;
  addXp: (amount: number) => Promise<UserProgress | null>;
  refreshProgress: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextValue | undefined>(
  undefined
);

export const useProfile = (): ProfileContextValue => {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
};

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [profile, setProfileState] = useState<UserProfile | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    const init = async () => {
      const p = await loadProfile();
      const prog = await loadProgress();
      setProfileState(p);
      setProgress(prog);
    };

    init();
  }, []);

  const setProfile = async (p: UserProfile) => {
    await saveProfile(p);
    setProfileState(p);
  };

  const refreshProgress = async () => {
    const prog = await loadProgress();
    setProgress(prog);
  };

  const addXp = async (amount: number) => {
    try {
      const updated = await storageAddXp(amount);
      setProgress(updated);
      return updated;
    } catch (e) {
      console.error("ProfileProvider.addXp error", e);
      return null;
    }
  };

  return (
    <ProfileContext.Provider
      value={{ profile, progress, setProfile, addXp, refreshProgress }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
