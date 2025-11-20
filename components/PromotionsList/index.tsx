import PromotionCard from "@/components/Promotions/PromotionCard";
import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface PromotionItem {
  id: string;
  title: string;
  subtitle?: string;
  cost: number;
  locked?: boolean;
}

interface PromotionsListProps {
  promotions: PromotionItem[];
  style?: ViewStyle;
}

export const PromotionsList: React.FC<PromotionsListProps> = ({
  promotions,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.header}>Recompensas Reais</Text>
      {promotions.map((p) => (
        <PromotionCard
          key={p.id}
          title={p.title}
          subtitle={p.subtitle}
          cost={p.cost}
          locked={p.locked}
        />
      ))}
    </View>
  );
};

export default PromotionsList;
