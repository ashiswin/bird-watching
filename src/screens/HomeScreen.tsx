import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { getShotsOfTheDay } from "../providers/PhotoProvider";
import PhotoStreamImage from "../components/birdview/PhotoStreamImage";
import { Colors } from "../utils/Colors";
import { Spacing } from "../utils/Spacing";

const HomeScreen: React.FC = () => {

  const photosOfTheDay = getShotsOfTheDay();

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Shots of the Day</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            photosOfTheDay.map((photo) => {
              return <PhotoStreamImage source={photo} />;
            })
          }
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.SURFACE_BACKGROUND,
  },
  title: {
    fontSize: 26,
    color: Colors.PRIMARY_TEXT,
    fontWeight: "bold",
    marginHorizontal: Spacing.LARGE,
    marginVertical: Spacing.MEDIUM,
  },
});

export default HomeScreen;
