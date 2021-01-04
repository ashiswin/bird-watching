import { NavigationProp, Route } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { Image } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import moment from "moment";
import { Bird } from "../providers/BirdProvider";
import PhotoStreamImage from "../components/birdview/PhotoStreamImage";
import FadingActionBar from "../components/FadingActionBar";
import { Colors } from "../utils/Colors";
import { Spacing } from "../utils/Spacing";

const IMAGE_HEIGHT_DP = 240;

interface Params {
  bird: Bird;
}

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NavigationProp<any>;
  route: Route<string, Params>;
}

const BirdScreen: React.FC<Props> = ({ navigation, route }) => {
  const bird = route.params.bird;

  const [actionBarOpacity, setActionBarOpacity] = useState(0);

  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const opacity = currentOffset / (IMAGE_HEIGHT_DP * 0.6);
    setActionBarOpacity(Math.min(opacity, 1.0));
  };

  return (
    <>
      <FadingActionBar
        opacity={actionBarOpacity}
        title={bird.name}
        onBackPressed={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={styles.container} onScroll={scrollHandler}>
        <Image
          source={{ uri: bird.image }}
          style={styles.image}
          resizeMethod="scale"
        />
        <View>
          <Text style={styles.name}>{bird.name}</Text>
          <Text style={styles.scientificName}>{bird.scientific}</Text>
        </View>
        <View>
          <Text style={styles.title}>Last location</Text>
          {bird.lastLocation !== undefined ? (
            <MapView
              initialRegion={{
                latitude: bird.lastLocation.lat,
                longitude: bird.lastLocation.lon,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={styles.map}
            >
              <Marker
                coordinate={{
                  latitude: bird.lastLocation.lat,
                  longitude: bird.lastLocation.lon,
                }}
                title={
                  "Last seen: " +
                  moment(
                    `${bird.lastLocation.date}T${bird.lastLocation.time}`
                  ).format("Do MMM YYYY")
                }
              />
            </MapView>
          ) : (
            <Text style={styles.lastLocationMissing}>
              This bird has not been sighted yet.
            </Text>
          )}
        </View>
        <View>
          <Text style={styles.title}>Photo stream</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <PhotoStreamImage source={bird.image} />
            <PhotoStreamImage
              source={
                "https://cdn.the-scientist.com/assets/articleNo/66820/hImg/34886/bird-banner3-l.png"
              }
            />
            <PhotoStreamImage
              source={
                "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001"
              }
            />
          </ScrollView>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: -28,
            }}
          >
            <Text style={styles.title}>Your photos</Text>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? Colors.TOUCH_HIGHLIGHT
                    : Colors.TRANSPARENT,
                  marginRight: 4,
                  padding: 8,
                  borderRadius: 8,
                },
              ]}
            >
              <Text style={styles.addPhoto}>Add Photo</Text>
            </Pressable>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <PhotoStreamImage
              source={
                "https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png"
              }
            />
            <PhotoStreamImage
              source={
                "https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png"
              }
            />
            <PhotoStreamImage
              source={
                "https://www.hakaimagazine.com/wp-content/uploads/header-gulf-birds.jpg"
              }
            />
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.SURFACE_BACKGROUND,
  },
  image: {
    width: "100%",
    height: IMAGE_HEIGHT_DP,
  },
  name: {
    fontSize: 32,
    color: Colors.PRIMARY_TEXT,
    fontWeight: "bold",
    marginHorizontal: Spacing.LARGE,
    marginTop: Spacing.MEDIUM,
  },
  scientificName: {
    fontStyle: "italic",
    color: Colors.SECONDARY_TEXT,
    marginHorizontal: Spacing.LARGE,
  },
  title: {
    fontSize: 26,
    color: Colors.PRIMARY_TEXT,
    fontWeight: "bold",
    marginHorizontal: Spacing.LARGE,
    marginVertical: Spacing.MEDIUM,
  },
  map: {
    width: "100%",
    height: 240,
  },
  lastLocationMissing: {
    marginHorizontal: Spacing.LARGE,
    marginTop: Spacing.SMALL,
  },
  addPhoto: {
    color: Colors.LINK_TEXT,
  },
});

export default BirdScreen;
