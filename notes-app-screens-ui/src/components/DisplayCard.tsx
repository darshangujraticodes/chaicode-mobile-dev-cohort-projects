import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useColorScheme,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "@/data/colors";

const DisplayCard = ({
  id,
  title,
  date,
  description,
  type,
  onDelete,
  isDark,
}: {
  isDark: boolean | null;
  id: string;
  title: string;
  date: string;
  description: string;
  type: string;
  onDelete: (id: string) => void;
}) => {
  const systemScheme = useColorScheme();

  const isDarkMode = isDark !== null ? isDark : systemScheme === "dark";
  const theme = isDarkMode ? colors.dark : colors.light;

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.cardBackground, borderColor: theme.border },
      ]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.cardHead }]}>{title}</Text>
        <Text style={[styles.date, { color: theme.text }]}>{date}</Text>
      </View>

      <Text
        style={[styles.description, { color: theme.text }]}
        numberOfLines={2}
      >
        {description}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Pressable onPress={() => onDelete(id)}>
          <Ionicons
            name="trash-outline"
            size={24}
            style={[{ color: theme.cardHead }]}
          />
        </Pressable>
        <Text style={styles.type}>#{type}</Text>
      </View>
    </View>
  );
};

export default DisplayCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },

  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    gap: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    flex: 1,
    marginRight: 10,
  },

  date: {
    fontSize: 12,
  },

  description: {
    lineHeight: 20,
  },

  type: {
    fontWeight: "700",
    fontSize: 15,
    backgroundColor: "#ffbe98",
    padding: 5,
    paddingHorizontal: 9,
    borderRadius: 6,
  },
});
