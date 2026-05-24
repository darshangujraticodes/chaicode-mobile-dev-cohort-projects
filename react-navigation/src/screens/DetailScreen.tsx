import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { styles } from "../styles/global";
import { useLayoutEffect } from "react";

const DetailScreen = () => {
  const navigation = useNavigation<any>();

  // useLayoutEffect(() => {
  //   +navigation.setOptions({
  //     title: "Suraj",
  //   });
  // }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>DetailScreen</Text>
      <Button
        onPress={() => navigation.navigate("Profile", { username: "Darshan" })}
      >
        Go to Profile
      </Button>
    </View>
  );
};

export default DetailScreen;
