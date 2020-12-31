import React from "react";
import { StyleSheet, TextInput, TextStyle } from "react-native";

interface Props {
  password?: boolean;
  value: string;
  placeholder: string;
  onChange?: (text: string) => void;
  style?: TextStyle;
}

const AppTextInput: React.FC<Props> = ({
  value,
  placeholder,
  onChange,
  password,
  style,
}) => {
  return (
    <TextInput
      style={{ ...styles.textbox, ...style }}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      secureTextEntry={password}
    />
  );
};

const styles = StyleSheet.create({
  textbox: {
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EFEFEF",
    width: "100%",
    marginTop: 8,
    paddingHorizontal: 16,
  },
});

export default AppTextInput;
