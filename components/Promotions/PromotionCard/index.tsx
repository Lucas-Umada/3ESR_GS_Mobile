import { colors } from "@/theme/colors";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface PromotionCardProps {
  title: string;
  subtitle?: string;
  cost: number;
  locked?: boolean;
  onRedeem?: () => void;
}

export const PromotionCard: React.FC<PromotionCardProps> = ({
  title,
  subtitle,
  cost,
  locked = true,
  onRedeem,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? (
            <Text style={{ color: colors.Placeholder, marginTop: 4 }}>
              {subtitle}
            </Text>
          ) : null}
        </View>

        <View style={styles.pill}>
          <Text style={styles.pillText}>{cost} XP</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity
          onPress={() => !locked && onRedeem && onRedeem()}
          activeOpacity={locked ? 1 : 0.8}
          style={[
            styles.actionButton,
            { backgroundColor: locked ? "#DFF5D1" : colors.primary },
          ]}
        >
          <Text style={locked ? styles.actionTextLocked : styles.actionText}>
            {locked ? "Bloqueado" : "Resgatar"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PromotionCard;
