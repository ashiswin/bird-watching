import React, { useState } from "react";
import { Pressable, StyleSheet, View, Dimensions } from "react-native";
import { Image } from "react-native-elements";
import ImageView from "react-native-image-viewing";
import { Colors } from "../../utils/Colors";
import { Spacing } from "../../utils/Spacing";
import { Photo } from "../../providers/PhotoProvider";

interface Props {
    photo: Photo;
}

const PhotoGalleryThumbnail: React.FC<Props> = ({ photo }) => {
    const [isViewing, setIsViewing] = useState(false);

    return (
        <>
            <View>
                <View>
                    <Image
                        source={{ uri: photo.uri }}
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
                images={[{ uri: photo.uri }]}
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
