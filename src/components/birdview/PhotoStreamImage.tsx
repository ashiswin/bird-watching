import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Icon, Image } from "react-native-elements";
import ImageView from "react-native-image-viewing";
import { Colors } from "../../utils/Colors";
import { Spacing } from "../../utils/Spacing";

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
                backgroundColor: pressed
                  ? Colors.TOUCH_HIGHLIGHT
                  : Colors.TRANSPARENT,
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
                backgroundColor: pressed
                  ? Colors.TOUCH_HIGHLIGHT
                  : Colors.TRANSPARENT,
              },
              styles.reactButton,
            ]}
            onPress={() => {
              setLiked(!liked);
            }}
          >
            <Icon
              name="favorite"
              color={liked ? "red" : Colors.PRIMARY_ICON_ON_MEDIA}
              size={16}
            />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? Colors.TOUCH_HIGHLIGHT
                  : Colors.TRANSPARENT,
              },
              styles.reactButton,
            ]}
          >
            <Icon
              name="person"
              color={Colors.PRIMARY_ICON_ON_MEDIA}
              size={16}
            />
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
                      ? Colors.TOUCH_HIGHLIGHT_INVERSE
                      : Colors.TRANSPARENT,
                  },
                  styles.reactButton,
                ]}
                onPress={() => {
                  setLiked(!liked);
                }}
              >
                <Icon
                  name="favorite"
                  color={liked ? "red" : Colors.PRIMARY_ICON_ON_MEDIA}
                  size={24}
                />
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? Colors.TOUCH_HIGHLIGHT_INVERSE
                      : Colors.TRANSPARENT,
                    flexDirection: "row",
                    alignItems: "center",
                  },
                  styles.reactButton,
                ]}
              >
                <Text
                  style={{
                    color: Colors.PRIMARY_TEXT_ON_MEDIA,
                    marginRight: 8,
                  }}
                >
                  @ashiswin
                </Text>
                <Icon
                  name="person"
                  color={Colors.PRIMARY_ICON_ON_MEDIA}
                  size={24}
                />
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
    marginHorizontal: Spacing.XSMALL,
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
    backgroundColor: Colors.TRANSPARENT,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: Spacing.XSMALL,
    position: "relative",
    top: -32,
    zIndex: 2,
  },
  reactButton: {
    padding: Spacing.SMALL,
    borderRadius: 16,
  },
});

export default PhotoStreamImage;
