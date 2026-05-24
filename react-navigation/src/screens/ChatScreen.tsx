import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { styles } from "../styles/global";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ChatScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chat Screen</Text>
    </View>
  );
}
