import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import TabBar from "./components/TabBar";
import LoginScreen from "./screens/LoginScreen";
const Stack = createStackNavigator();

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {loggedIn ? (
          <Stack.Screen name="Main" component={TabBar} />
        ) : (
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen {...props} onLogin={() => setLoggedIn(true)} />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
