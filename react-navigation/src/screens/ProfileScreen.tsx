import { View, Text } from "react-native";
import { styles } from "../styles/global";
import { Button } from "@react-navigation/elements";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ProfileScreen({}) {
  const navigation = useNavigation<any>();

  const route = useRoute<any>();

  const { username = "Guest User" } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Profile</Text>

      <Text style={styles.heading}>Name : {username}</Text>

      <Button onPress={() => navigation.goBack()}>Go Back</Button>
    </View>
  );
}
