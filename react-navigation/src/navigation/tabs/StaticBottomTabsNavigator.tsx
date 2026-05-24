import * as React from "react";
import { Text, View } from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import DetailScreen from "../../screens/DetailScreen";

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Details: DetailScreen,
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function StaticBottomTabsNavigator() {
  return <Navigation />;
}
