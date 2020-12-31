import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import AppTextInput from "../components/AppTextInput";
import DexListItem from "../components/dex/DexListItem";
import { Birds } from "../providers/BirdProvider";
import { Regions } from "../providers/RegionProvider";

const DexScreen: React.FC = () => {
  const [search, setSearch] = useState("");
  const [birds, setBirds] = useState(Birds);
  const [region, setRegion] = useState("");

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
      <View style={styles.titleRow}>
        <Text style={styles.title}>Dex</Text>
        <View style={{ width: "50%" }}>
          <DropDownPicker
            items={Regions.map((item) => ({ value: item, label: item }))}
            defaultValue="Singapore"
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: "#fafafa", flexGrow: 1 }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
            onChangeItem={(item) => {
              setRegion(item);
            }}
          />
        </View>
      </View>
      <AppTextInput
        value={search}
        onChange={(text) => {
          setSearch(text);
        }}
        placeholder="Search Dex"
      />
      <FlatList
        data={birds}
        renderItem={({ item, index }) => (
          <DexListItem bird={item} found={index % 2 === 1} key={item.id} />
        )}
        style={styles.birdList}
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
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    color: "black",
    marginTop: 4,
    fontWeight: "bold",
  },
  birdList: {
    marginTop: 8,
  },
});

export default DexScreen;
