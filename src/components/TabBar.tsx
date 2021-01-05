import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { Icon } from "react-native-elements";
import DexScreen from "../screens/DexScreen";
import ShotsScreen from "../screens/ShotsScreen";
import HomeScreen from "../screens/HomeScreen";
import PhotoScreen from "../screens/PhotoScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Colors } from "../utils/Colors";
import { Spacing } from "../utils/Spacing";

const Tab = createBottomTabNavigator();
const EmptyComponent = () => {
  return null;
};

const TabBar: React.FC = () => {
  const customTabBarStyle: BottomTabBarOptions = {
    activeTintColor: "black",
    inactiveTintColor: "grey",
    allowFontScaling: true,
    labelStyle: { fontSize: 12, marginTop: -Spacing.SMALL },
    tabStyle: { marginBottom: Spacing.MEDIUM },
    style: {
      height: 56,
      backgroundColor: Colors.SURFACE_BACKGROUND,
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      elevation: 0,
    },
  };
  const getIcon = (name: string, focused: boolean) => (
    <Icon
      name={name}
      color={focused ? Colors.PRIMARY_ICON : Colors.SECONDARY_ICON}
    />
  );

  return (
    <Tab.Navigator initialRouteName={"Home"} tabBarOptions={customTabBarStyle}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => getIcon("home", focused),
        }}
      />
      <Tab.Screen
        name="My Shots"
        component={ShotsScreen}
        options={{
          tabBarLabel: "My Shots",
          tabBarIcon: ({ focused }) => getIcon("burst-mode", focused),
        }}
      />
      <Tab.Screen
        name="Photo"
        component={EmptyComponent}
        options={{
          tabBarButton: () => <PhotoScreen />,
        }}
      />
      <Tab.Screen
        name="Dex"
        component={DexScreen}
        options={{
          tabBarLabel: "Dex",
          tabBarIcon: ({ focused }) => getIcon("list", focused),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => getIcon("person", focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
