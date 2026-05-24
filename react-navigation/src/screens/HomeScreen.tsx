import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { styles } from "../styles/global";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.heading}>Home Screen</Text>

        <Button screen={"Details"}>Go to Details Screen</Button>

        <Button onPress={() => navigation.navigate("Profile")}>
          Go to Profile Screen
        </Button>
      </View>
    </SafeAreaProvider>
  );
}
