import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import AppTextInput from "../components/AppTextInput";
import DexListItem from "../components/dex/DexListItem";
import { Birds } from "../providers/BirdProvider";

const DexScreen: React.FC = () => {
  const [search, setSearch] = useState("");
  const [birds, setBirds] = useState(Birds);

  useEffect(() => {
    setBirds(
      Birds.filter((value) => {
        return (
          value.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          value.scientific.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
      })
    );
  }, [search]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dex</Text>
      <AppTextInput
        value={search}
        onChange={(text) => {
          setSearch(text);
        }}
        placeholder="Search Dex"
      />
      <FlatList
        data={birds}
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
