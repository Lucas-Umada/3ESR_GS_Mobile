import Ionicons from "@expo/vector-icons/Ionicons";
import React, { memo } from "react";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Text,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";

import { Button } from "@/components/Button";
import { CustomDropdown } from "@/components/Dropdown";
import { Input } from "@/components/Input";
import { saveProfile } from "@/services/storage";
import { colors } from "@/theme/colors";
import { router } from "expo-router";
import { indexStyles as styles } from "./styles";

interface WelcomeProps {
  title?: string;
  subtitle?: string;
  imageSource?: ImageSourcePropType;
  buttonLabel?: string;
  onStart?: (event?: GestureResponderEvent) => void;
  style?: ViewStyle;
  testID?: string;
}

const careerOptions = [
  { label: "Tecnologia e IA", value: "Tech" },
  { label: "Gestão e Liderança Remota", value: "Management" },
  { label: "Comunicação e Soft Skills", value: "SoftSkills" },
  { label: "Sustentabilidade e Inovação", value: "Sustainability" },
];

const Welcome: React.FC<WelcomeProps> = ({
  title = "SkillQuest",
  subtitle = "Sua jornada para o futuro do trabalho começa aqui.",
  buttonLabel = "Começar Jornada",
  style,
  testID,
}) => {
  const { width } = useWindowDimensions();
  const [name, setName] = React.useState("");
  const [interest, setInterest] = React.useState("");

  const handleStartJourney = () => {
    saveProfile({ name, careerInterest: interest as any });
    router.replace("/(tabs)");
  };

  return (
    <View testID={testID} style={[styles.container, style]}>
      <Text style={styles.title} accessibilityRole="header">
        <Ionicons name="rocket" color={colors.primary} size={25} /> {title}
      </Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <Image
        source={require("../assets/images/photo-1522202176988-66273c2fd55f.jpeg")}
        style={[styles.image, { width: Math.min(320, width * 0.9) }]}
        resizeMode="cover"
        accessible
        accessibilityRole="image"
      />

      <Input
        placeholder="Seu nome"
        value={name}
        onChangeText={(e) => setName(e)}
      />
      <CustomDropdown
        placeholderLabel="Selecione sua área de interesse principal"
        options={careerOptions}
        selectedValue={interest}
        onValueChange={(value) => setInterest(value)}
      />

      <Button
        title={buttonLabel}
        onPress={handleStartJourney}
        disabled={!name.trim() || !interest.trim()}
      />

      <Text style={styles.footerText}>
        Desenvolva habilidades através de missões gamificadas
      </Text>
    </View>
  );
};

export default memo(Welcome);
