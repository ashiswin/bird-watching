import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../utils/Colors";
import { Spacing } from "../utils/Spacing";

const ShotsScreen: React.FC = () => {

    return (
        <View style={styles.container}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>My Shots</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.SURFACE_BACKGROUND,
        flexGrow: 1,
        paddingHorizontal: Spacing.LARGE,
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
    },
});

export default ShotsScreen;
