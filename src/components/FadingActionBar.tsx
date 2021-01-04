import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { Colors } from "../utils/Colors";
import rgbHex from "rgb-hex";
import { Spacing } from "../utils/Spacing";

interface Props {
  title?: string;
  opacity: number;
  onBackPressed: () => void;
}

const FadingActionBar: React.FC<Props> = ({
  opacity,
  title,
  onBackPressed,
}) => {
  const backgroundColor = Math.min(Math.floor(255 * (1 - opacity)), 255);

  return (
    <View
      style={[
        { backgroundColor: `rgba(255, 255, 255, ${opacity})` },
        styles.actionBar,
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? Colors.TOUCH_HIGHLIGHT
              : Colors.TRANSPARENT,
          },
          styles.backButton,
        ]}
        onPress={onBackPressed}
      >
        <Icon
          name="arrow-back"
          color={`#${rgbHex(
            backgroundColor,
            backgroundColor,
            backgroundColor
          )}`}
        />
      </Pressable>
      <Text style={[{ opacity: opacity - 0.1 }, styles.actionBarTitle]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: "row",
    flexGrow: 1,
    width: "100%",
    position: "absolute",
    paddingBottom: Spacing.SMALL,
    top: 0,
    left: 0,
    zIndex: 1,
    alignItems: "center",
  },
  actionBarTitle: {
    fontSize: 20,
    color: Colors.PRIMARY_TEXT,
    marginTop: Spacing.XSMALL,
    fontWeight: "bold",
  },
  backButton: {
    alignSelf: "flex-start",
    marginTop: Spacing.SMALL,
    marginLeft: Spacing.XSMALL,
    borderRadius: 20,
    padding: Spacing.SMALL,
  },
});

export default FadingActionBar;
