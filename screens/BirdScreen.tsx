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
          <ScrollView horizontal={true}>
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
            }}
          >
            <Text style={styles.title}>Your photos</Text>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? "rgba(0, 0, 0, 0.2)"
                    : "transparent",
                  marginRight: 4,
                  padding: 8,
                  borderRadius: 8,
                },
              ]}
            >
              <Text style={styles.addPhoto}>Add Photo</Text>
            </Pressable>
          </View>
          <ScrollView horizontal={true}>
            <PhotoStreamImage
              source={
                "data:image/jpeg;base64,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"
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
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: IMAGE_HEIGHT_DP,
  },
  name: {
    fontSize: 32,
    color: "black",
    fontWeight: "bold",
    marginHorizontal: 16,
    marginTop: 12,
  },
  scientificName: {
    fontStyle: "italic",
    color: "#999999",
    marginHorizontal: 16,
  },
  title: {
    fontSize: 26,
    color: "black",
    fontWeight: "bold",
    marginHorizontal: 16,
    marginVertical: 12,
  },
  map: {
    width: "100%",
    height: 240,
  },
  lastLocationMissing: {
    marginHorizontal: 16,
    marginTop: 8,
  },
  addPhoto: {
    color: "blue",
  },
});

export default BirdScreen;
