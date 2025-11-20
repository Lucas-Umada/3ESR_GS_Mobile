import { useProfile } from "@/contexts/ProfileContext";
import { colors } from "@/theme/colors";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MOCK_QUESTIONS = [
  {
    id: "q1",
    title: "O que significa IA?",
    options: [
      "Inteligência Artificial",
      "Informação Avançada",
      "Interface Automática",
      "Índice de Aprendizado",
    ],
    correctAnswerIndex: 0,
    points: 50,
  },
  {
    id: "q2",
    title: "Qual é uma aplicação comum de IA?",
    options: [
      "Automação de processos",
      "Pintura artística",
      "Lavagem a seco",
      "Culinária",
    ],
    correctAnswerIndex: 0,
    points: 40,
  },
];

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  const pct = Math.max(0, Math.min(1, progress));
  return (
    <View style={localStyles.progressWrapper}>
      <View style={localStyles.progressTrack} />
      <View style={[localStyles.progressFill, { width: `${pct * 100}%` }]} />
    </View>
  );
};

export default function MissionScreen() {
  const router = useRouter();
  const { addXp } = useProfile();

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const question = MOCK_QUESTIONS[index];

  const handleSelect = (i: number) => {
    setSelected(i);
  };

  const handleNext = async () => {
    if (selected === null) return;

    const isCorrect = selected === question.correctAnswerIndex;
    if (isCorrect) {
      await addXp(question.points);
    }

    setSelected(null);
    if (index + 1 < MOCK_QUESTIONS.length) setIndex(index + 1);
    else router.replace("/trilhas");
  };

  const progress = (index + 1) / MOCK_QUESTIONS.length;

  return (
    <SafeAreaView style={localStyles.container}>
      <ScrollView contentContainerStyle={localStyles.content}>
        <View style={localStyles.topRow}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={localStyles.backBtn}
          >
            <Text style={localStyles.backText}>← Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={localStyles.header}>
          <Text style={localStyles.title}>Fundamentos de IA</Text>
          <ProgressBar progress={progress} />
          <Text style={localStyles.subtitle}>{`Questão ${index + 1} de ${
            MOCK_QUESTIONS.length
          }`}</Text>
        </View>

        <View style={localStyles.questionCard}>
          <Text style={localStyles.questionText}>{question.title}</Text>
        </View>

        <View style={localStyles.optionsList}>
          {question.options.map((opt, i) => {
            const active = selected === i;
            return (
              <TouchableOpacity
                key={i}
                onPress={() => handleSelect(i)}
                style={[
                  localStyles.option,
                  active && {
                    borderColor: colors.primary,
                    backgroundColor: "#fff",
                  },
                ]}
              >
                <Text
                  style={[
                    localStyles.optionText,
                    active && { color: colors.primary },
                  ]}
                >
                  {opt}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={localStyles.footer}>
          <TouchableOpacity
            onPress={handleNext}
            disabled={selected === null}
            style={[
              localStyles.nextButton,
              {
                backgroundColor: selected === null ? "#e6e6e6" : colors.primary,
              },
            ]}
          >
            <Text
              style={[
                localStyles.nextText,
                { color: selected === null ? "#888" : "#fff" },
              ]}
            >
              {index + 1 < MOCK_QUESTIONS.length ? "Próxima" : "Finalizar"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  topRow: { height: 36, justifyContent: "center" },
  backBtn: { paddingVertical: 6 },
  backText: { color: colors.text },
  header: { marginTop: 8, marginBottom: 16 },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.darkGray,
    marginBottom: 8,
  },
  progressWrapper: { height: 12, marginVertical: 6, position: "relative" },
  progressTrack: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#EFEFEF",
    borderRadius: 12,
  },
  progressFill: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.primary,
    borderRadius: 12,
  },
  subtitle: { color: colors.Placeholder, marginTop: 8 },
  questionCard: {
    backgroundColor: colors.white,
    padding: 18,
    borderRadius: 12,
    marginTop: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  questionText: { fontSize: 18, fontWeight: "700", color: colors.darkGray },
  optionsList: { marginTop: 18 },
  option: {
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E7E8",
    marginBottom: 12,
  },
  optionText: { color: colors.text },
  footer: { marginTop: 8, alignItems: "center" },
  nextButton: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  nextText: { fontWeight: "700" },
});
