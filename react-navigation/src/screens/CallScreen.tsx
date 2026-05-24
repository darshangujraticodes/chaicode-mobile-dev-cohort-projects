import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { styles } from "../styles/global";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function CallScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Call Screen</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
