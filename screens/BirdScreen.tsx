import { NavigationProp, Route } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Icon, Image } from "react-native-elements";
import { Bird } from "../providers/BirdProvider";

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
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#AAAAAA" : "transparent",
          },
          styles.backButton,
        ]}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrow-back" color="white" />
      </Pressable>
      <Image
        source={{ uri: bird.image }}
        style={styles.image}
        resizeMethod="scale"
      />
      <View>
        <Text style={styles.name}>{bird.name}</Text>
        <Text style={styles.scientificName}>{bird.scientific}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: -44,
    marginTop: 16,
    marginLeft: 4,
    zIndex: 1,
    borderRadius: 20,
    padding: 8,
  },
  image: {
    width: "100%",
    height: 240,
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
});

export default BirdScreen;
