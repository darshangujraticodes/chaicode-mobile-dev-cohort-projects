import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { styles } from "../styles/global";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ContactScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.heading}>Contact Screen</Text>
      </View>
    </SafeAreaProvider>
  );
}
