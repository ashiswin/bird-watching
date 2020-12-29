import { BottomTabBarOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import PhotoScreen from '../screens/PhotoScreen';

const Tab = createBottomTabNavigator();
const EmptyComponent = () => { return null };

const TabBar: React.FC = () => {
  const customTabBarStyle: BottomTabBarOptions = {
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    allowFontScaling: true,
    labelStyle: { fontSize: 12, marginTop: -8 },
    tabStyle: { marginBottom: 12 },
    style: {
      height: 56,
      backgroundColor: 'transparent',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      elevation: 0,
    },
  }
  const getIcon = (name: string, focused: boolean) =>
    <Icon
      name={name}
      color={focused ? 'black' : '#999999'} />;

  return (
    <Tab.Navigator initialRouteName={"Home"} tabBarOptions={customTabBarStyle}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => getIcon('home', focused),
        }} />
      <Tab.Screen name="My Shots" component={HomeScreen}
        options={{
          tabBarLabel: 'My Shots',
          tabBarIcon: ({ focused }) => getIcon('burst-mode', focused),
        }} />
      <Tab.Screen name="Photo" component={EmptyComponent} options={{
        tabBarButton: () => (<PhotoScreen />),
      }} />
      <Tab.Screen name="Profile" component={HomeScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => getIcon('person', focused),
      }
      } />
      <Tab.Screen name="Notifications" component={HomeScreen} options={{
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ focused }) => getIcon('notifications', focused),
      }
      } />
    </Tab.Navigator>
  );
};

export default TabBar;