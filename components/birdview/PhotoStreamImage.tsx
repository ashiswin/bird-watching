import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Icon, Image } from "react-native-elements";
import ImageView from "react-native-image-viewing";

interface Props {
  source: string;
}

const PhotoStreamImage: React.FC<Props> = ({ source }) => {
  const [liked, setLiked] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  return (
    <>
      <View>
        <View>
          <Image
            source={{ uri: source }}
            style={styles.image}
            resizeMethod="scale"
          />
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgba(0, 0, 0, 0.2)" : "transparent",
              },
              styles.image,
              styles.imageOverlay,
            ]}
            onPress={() => {
              setIsViewing(true);
            }}
          ></Pressable>
        </View>
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
      <ImageView
        images={[{ uri: source }]}
        imageIndex={0}
        visible={isViewing}
        onRequestClose={() => setIsViewing(false)}
        swipeToCloseEnabled={false}
        FooterComponent={() => {
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                  },
                  styles.reactButton,
                ]}
                onPress={() => {
                  setLiked(!liked);
                }}
              >
                <Icon
                  name="favorite"
                  color={liked ? "red" : "white"}
                  size={24}
                />
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                    flexDirection: "row",
                    alignItems: "center",
                  },
                  styles.reactButton,
                ]}
              >
                <Text style={{ color: "white", marginRight: 8 }}>
                  @ashiswin
                </Text>
                <Icon name="person" color="white" size={24} />
              </Pressable>
            </View>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 168,
    height: 108,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
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
    zIndex: 2,
  },
  reactButton: {
    padding: 8,
    borderRadius: 16,
  },
});

export default PhotoStreamImage;
