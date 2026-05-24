import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import DetailScreen from "../../screens/DetailScreen";

const Stack = createNativeStackNavigator({
  // initialRouteName: "Profile",
  screens: {
    Home: {
      screen: HomeScreen,
      options: {},
    },
    Details: DetailScreen,
    Profile: ProfileScreen,
  },
});

const Navigation = createStaticNavigation(Stack);

export default function StaticStackNavigator() {
  return <Navigation />;
}
