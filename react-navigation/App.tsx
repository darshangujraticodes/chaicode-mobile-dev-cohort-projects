import DynamicStackNavigator from "./src/navigation/stack/DynamicStackNavigator";
import StaticStackNavigator from "./src/navigation/stack/StaticStackNavigator";
import StaticBottomTabsNavigator from "./src/navigation/tabs/StaticBottomTabsNavigator";
import DynamicBottomTabsNavigator from "./src/navigation/tabs/DynamicBottomTabsNavigator";
import MultiNavigation from "./src/navigation/multinavigation/MultiNavigation";
import DynamicDrawerNavigation from "./src/navigation/drawer/DynamicDrawerNavigation";

export default function App() {
  return <MultiNavigation />;
}
