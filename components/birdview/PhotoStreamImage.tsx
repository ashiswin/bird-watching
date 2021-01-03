import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Icon, Image } from "react-native-elements";

interface Props {
  source: string;
}

const PhotoStreamImage: React.FC<Props> = ({ source }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View>
      <Image
        source={{ uri: source }}
        style={styles.image}
        resizeMethod="scale"
      />
      <View style={styles.reactRow}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgba(0, 0, 0, 0.2)" : "transparent",
            },
            styles.reactButton,
          ]}
          onPress={() => {
            setLiked(!liked);
          }}
        >
          <Icon name="favorite" color={liked ? "red" : "white"} size={16} />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgba(0, 0, 0, 0.2)" : "transparent",
            },
            styles.reactButton,
          ]}
        >
          <Icon name="person" color="white" size={16} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 168,
    height: 108,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  reactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 4,
    position: "relative",
    top: -32,
  },
  reactButton: {
    padding: 8,
    borderRadius: 16,
  },
});

export default PhotoStreamImage;
