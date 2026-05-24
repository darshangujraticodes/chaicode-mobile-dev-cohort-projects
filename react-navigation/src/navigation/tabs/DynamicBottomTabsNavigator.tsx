import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import DetailScreen from "../../screens/DetailScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Details"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {},
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#2626262",
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          switch (route.name) {
            case "Home":
              icon = focused ? "home" : "home-outline";
              break;

            case "Details":
              icon = focused ? "chatbubble" : "chatbubble-outline";
              break;

            case "Profile":
              icon = focused ? "person" : "person-outline";
              break;

            default:
              icon = "help-circle-outline";
          }

          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="Details"
        component={DetailScreen}
        options={{
          title: "Details",
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

export default function DynamicBottomTabsNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
