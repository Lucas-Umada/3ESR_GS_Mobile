export interface Mission {
  id: string;
  title: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  points: number;
}

export interface UserProfile {
  name: string;
  careerInterest:
    | "Tech"
    | "Management"
    | "SoftSkills"
    | "Sustainability"
    | string;
}

export interface UserProgress {
  xp: number;
  levelsCompleted: string[];
  badges: string[];
  lastLogin: string;
}

export type RootStackParamList = {
  "(tabs)": undefined;
  welcome: undefined;
  mission: undefined;
};
