import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import Button from "../components/Button";
import { Colors } from "../utils/Colors";
import { Spacing } from "../utils/Spacing";

const background = {
  uri:
    "https://images.unsplash.com/photo-1606830836043-d1045a1da55e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
};

interface Props {
  onLogin: () => void;
}

const LoginScreen: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>Welcome back</Text>
          <Text style={styles.title}>Login</Text>
        </View>
        <View style={styles.logincontainer}>
          <Text style={{ color: Colors.PRIMARY_TEXT }}>
            Sign in to get started
          </Text>
          <AppTextInput
            onChange={(text) => setUsername(text)}
            value={username}
            placeholder="Username"
          />
          <AppTextInput
            onChange={(text) => setPassword(text)}
            value={password}
            placeholder="Password"
            password
          />
          <View style={styles.loginButtonContainer}>
            <Button
              title="Login"
              backgroundColor={Colors.PRIMARY_BUTTON}
              style={{ marginRight: 2 }}
              onPress={() => onLogin()}
            />
            <Button title="Sign Up" style={{ marginLeft: 2 }} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  overlay: {
    backgroundColor: "#000000",
    opacity: 0.45,
    flexGrow: 1,
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    marginHorizontal: Spacing.MEDIUM,
    marginBottom: -Spacing.XSMALL,
  },
  title: {
    fontSize: 42,
    color: Colors.PRIMARY_TEXT_ON_MEDIA,
    marginHorizontal: Spacing.MEDIUM,
    fontWeight: "bold",
  },
  titleContainer: {
    flexGrow: 1,
    position: "absolute",
    top: Spacing.MEDIUM,
    left: 0,
  },
  logincontainer: {
    backgroundColor: Colors.SURFACE_BACKGROUND,
    marginHorizontal: Spacing.MEDIUM,
    borderRadius: 8,
    marginBottom: Spacing.MEDIUM,
    alignItems: "center",
    padding: Spacing.MEDIUM,
  },
  content: {
    zIndex: 2,
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  loginButtonContainer: {
    flexDirection: "row",
    marginTop: Spacing.SMALL,
  },
});

export default LoginScreen;
