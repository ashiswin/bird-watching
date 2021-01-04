import React from "react";
import { StyleSheet, TouchableOpacity, Text, ViewStyle } from "react-native";
import { Colors } from "../utils/Colors";

interface Props {
  title: string;
  backgroundColor?: string;
  onPress?: (GestureResponderEvent) => void;
  style?: ViewStyle;
}

const Button: React.FC<Props> = ({
  onPress,
  title,
  style,
  backgroundColor = "grey",
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={{
      ...styles.appButtonContainer,
      backgroundColor: backgroundColor,
      ...style,
    }}
  >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    height: 40,
    flexGrow: 1,
  },
  appButtonText: {
    fontSize: 16,
    color: Colors.PRIMARY_TEXT_ON_MEDIA,
    alignSelf: "center",
  },
});

export default Button;
