import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import SearchScreen from "../../screens/SearchScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import DetailScreen from "../../screens/DetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CallScreen from "../../screens/CallScreen";
import ContactScreen from "../../screens/ContactScreen";
import ChatScreen from "../../screens/ChatScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../../screens/LoginScreen";

// Stack Navigation

const HomeStack = createNativeStackNavigator();

function HomeStackScreens() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
}

// Material Top Tab Navigation

const ContactTopTab = createMaterialTopTabNavigator();

function ContactTopTabScreens() {
  return (
    <ContactTopTab.Navigator>
      <ContactTopTab.Screen name="Calls" component={CallScreen} />
      <ContactTopTab.Screen name="Contacts" component={ContactScreen} />
      <ContactTopTab.Screen name="Chats" component={ChatScreen} />
    </ContactTopTab.Navigator>
  );
}

// Drawer Navigation

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MainTabs"
        component={MyTabs}
        options={{
          title: "Home",
        }}
      />

      <Drawer.Screen name="Details" component={DetailScreen} />

      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
}

// Bottom Tab Navigation

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {},
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#2626262",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Overview":
              iconName = focused ? "home" : "home-outline";
              break;

            case "Search":
              iconName = focused ? "search" : "search-outline";
              break;

            case "Contacts":
              iconName = focused ? "people" : "people-outline";
              break;

            default:
              iconName = focused ? "help-circle" : "help-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Overview" component={HomeStackScreens} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Contacts" component={ContactTopTabScreens} />
    </Tab.Navigator>
  );
}

export default function MultiNavigation() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
        {/* <MyTabs /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}
