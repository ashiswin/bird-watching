import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import PhotoGalleryThumbnail from "../components/photos/PhotoGalleryThumbnail";
import { getPhotosForUser } from "../providers/PhotoProvider";
import { Colors } from "../utils/Colors";
import { Spacing } from "../utils/Spacing";

const ShotsScreen: React.FC = () => {

    return (
        <View style={styles.container}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>My Shots</Text>
            </View>
            <FlatList
                data={getPhotosForUser("")}
                horizontal={false}
                numColumns={3}
                renderItem={({ item }) => (
                    <PhotoGalleryThumbnail photo={item} />
                )}
                style={styles.imageGrid}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.SURFACE_BACKGROUND,
        flexGrow: 1,
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 32,
        color: Colors.PRIMARY_TEXT,
        marginTop: Spacing.XSMALL,
        fontWeight: "bold",
        marginHorizontal: Spacing.LARGE,
    },
    imageGrid: {
        marginHorizontal: Spacing.LARGE + 1,
        marginTop: Spacing.SMALL
    },
});

export default ShotsScreen;
