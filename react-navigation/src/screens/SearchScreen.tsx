import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "@react-navigation/elements";
import { styles } from "../styles/global";

const SearchScreen = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.heading}>Search Screen</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default SearchScreen;
