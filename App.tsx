import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import TabBar from "./src/components/TabBar";
import BirdScreen from "./src/screens/BirdScreen";
import LoginScreen from "./src/screens/LoginScreen";
const Stack = createStackNavigator();

const App: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(undefined);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user === undefined || user === null ? (
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Main" component={TabBar} />
            <Stack.Screen name="Bird" component={BirdScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
