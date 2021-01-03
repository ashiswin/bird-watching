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
import { Icon, Image } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import moment from "moment";
import { Bird } from "../providers/BirdProvider";
import rgbHex from "rgb-hex";
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
            <PhotoStreamImage source={bird.image} />
            <PhotoStreamImage source={bird.image} />
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
                  backgroundColor: pressed ? "#AAAAAA22" : "transparent",
                  marginRight: 12,
                  padding: 4,
                  borderRadius: 8,
                },
              ]}
            >
              <Text style={styles.addPhoto}>Add Photo</Text>
            </Pressable>
          </View>
          <ScrollView horizontal={true}>
            <PhotoStreamImage source={bird.image} />
            <PhotoStreamImage source={bird.image} />
            <PhotoStreamImage source={bird.image} />
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
