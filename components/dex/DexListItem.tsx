import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import { Bird } from "../../providers/BirdProvider";

interface Props {
  bird: Bird;
  found: boolean;
}

const DexListItem: React.FC<Props> = ({ bird, found }) => {
  const navigation = useNavigation();
  return (
    <>
      <Pressable
        onPress={() => {
          navigation.navigate("Bird", { bird: bird });
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#EFEFEF" : "white",
          },
          styles.container,
        ]}
      >
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{bird.name}</Text>
          <Text style={styles.scientificName}>{bird.scientific}</Text>
        </View>
        {found ? <Icon name="camera" /> : null}
      </Pressable>
      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameContainer: {
    flexDirection: "column",
  },
  name: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  scientificName: {
    fontStyle: "italic",
    color: "#999999",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    width: "100%",
    backgroundColor: "grey",
  },
});

export default DexListItem;
