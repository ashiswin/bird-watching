import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text, Dimensions } from "react-native";
import { Image } from "react-native-elements";
import ImageView from "react-native-image-viewing";
import { Colors } from "../../utils/Colors";
import { Spacing } from "../../utils/Spacing";

interface Props {
    source: string;
}

const PhotoGalleryThumbnail: React.FC<Props> = ({ source }) => {
    const [isViewing, setIsViewing] = useState(false);

    return (
        <>
            <View>
                <View>
                    <Image
                        source={{ uri: source }}
                        style={styles.image}
                        resizeMethod="resize"
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
                    />
                </View>
            </View>
            <ImageView
                images={[{ uri: source }]}
                imageIndex={0}
                visible={isViewing}
                onRequestClose={() => setIsViewing(false)}
                swipeToCloseEnabled={false}
            />
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        width: (Dimensions.get('window').width - 2 * Spacing.LARGE) / 3 - Spacing.XSMALL / 2,
        height: (Dimensions.get('window').width - 2 * Spacing.LARGE) / 3 - Spacing.XSMALL / 2,
        margin: Spacing.XSMALL / 4,
        borderRadius: 0,
    },
    imageOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
    },
});

export default PhotoGalleryThumbnail;
