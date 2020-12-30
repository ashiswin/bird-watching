import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import DexListItem from "../components/dex/DexListItem";
import { Birds } from "../providers/BirdProvider";

const DexScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dex</Text>
      <FlatList
        data={Birds}
        renderItem={({ item }) => (
          <DexListItem bird={item} found={false} key={item.id} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "black",
    marginTop: 4,
    fontWeight: "bold",
  },
});

export default DexScreen;
