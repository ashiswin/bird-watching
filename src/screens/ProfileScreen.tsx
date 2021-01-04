import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import ProfileStat from "../components/profile/ProfileStat";
import { Colors } from "../utils/Colors";
import { Spacing } from "../utils/Spacing";

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
          }}
          style={styles.profilePicture}
        />
      </View>
      <Text style={styles.profileName}>Janne Jackson</Text>
      <View style={styles.statsRow}>
        <ProfileStat title="Species" count="24" />
        <ProfileStat title="Shots" count="128" />
        <ProfileStat title="Followers" count="1.4K" />
        <ProfileStat title="Following" count="128" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.SURFACE_BACKGROUND,
    height: "100%",
  },
  imageContainer: {
    marginTop: 96,
    width: 128,
    height: 128,
    borderRadius: 64,
    elevation: 2,
  },
  profilePicture: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  profileName: {
    fontSize: 24,
    marginTop: Spacing.XLARGE,
    color: Colors.PRIMARY_TEXT,
    fontWeight: "bold",
  },
  statsRow: {
    flexDirection: "row",
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: Spacing.MEDIUM,
  },
});
export default ProfileScreen;
