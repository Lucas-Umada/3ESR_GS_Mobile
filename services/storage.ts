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

// --- Funções de Progresso (UserProgress) ---

const initialProgress: UserProgress = {
  xp: 0,
  levelsCompleted: [],
  badges: [],
  lastLogin: new Date().toISOString(),
};

/**
 * Carrega o progresso atual do usuário.
 * Retorna o progresso ou o estado inicial se não houver dados.
 */
export const loadProgress = async (): Promise<UserProgress> => {
  try {
    const jsonValue = await AsyncStorage.getItem(PROGRESS_KEY);
    // Se houver dados, parse e retorna; senão, retorna o estado inicial.
    return jsonValue != null
      ? (JSON.parse(jsonValue) as UserProgress)
      : initialProgress;
  } catch (e) {
    console.error("Erro ao carregar o progresso:", e);
    return initialProgress;
  }
};

/**
 * Atualiza o progresso do usuário (XP e missões).
 * @param newProgress - O objeto completo de progresso atualizado.
 */
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

/**
 * Função de conveniência para limpar todos os dados (útil para testes).
 */
export const clearAllData = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
    console.log("Todos os dados do AsyncStorage foram removidos.");
  } catch (e) {
    console.error("Erro ao limpar dados:", e);
  }
};
