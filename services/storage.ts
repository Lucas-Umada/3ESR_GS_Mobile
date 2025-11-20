import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserProfile, UserProgress } from "../types";

const PROFILE_KEY = "@skillquest_user_profile";
const PROGRESS_KEY = "@skillquest_user_progress";

export const saveProfile = async (profileData: UserProfile): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(profileData);
    await AsyncStorage.setItem(PROFILE_KEY, jsonValue);
  } catch (e) {
    console.error("Erro ao salvar o perfil:", e);
  }
};

export const loadProfile = async (): Promise<UserProfile | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(PROFILE_KEY);
    return jsonValue != null ? (JSON.parse(jsonValue) as UserProfile) : null;
  } catch (e) {
    console.error("Erro ao carregar o perfil:", e);
    return null;
  }
};

const initialProgress: UserProgress = {
  xp: 0,
  levelsCompleted: [],
  badges: [],
  lastLogin: new Date().toISOString(),
};

export const loadProgress = async (): Promise<UserProgress> => {
  try {
    const jsonValue = await AsyncStorage.getItem(PROGRESS_KEY);
    return jsonValue != null
      ? (JSON.parse(jsonValue) as UserProgress)
      : initialProgress;
  } catch (e) {
    console.error("Erro ao carregar o progresso:", e);
    return initialProgress;
  }
};

export const updateProgress = async (
  newProgress: UserProgress
): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(newProgress);
    await AsyncStorage.setItem(PROGRESS_KEY, jsonValue);
  } catch (e) {
    console.error("Erro ao atualizar o progresso:", e);
  }
};

export const addXp = async (amount: number): Promise<UserProgress> => {
  try {
    const progress = await loadProgress();
    progress.xp = (progress.xp ?? 0) + amount;
    await updateProgress(progress);
    return progress;
  } catch (e) {
    console.error("Erro ao adicionar XP:", e);
    return initialProgress;
  }
};

export const clearAllData = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
    console.log("Todos os dados do AsyncStorage foram removidos.");
  } catch (e) {
    console.error("Erro ao limpar dados:", e);
  }
};
