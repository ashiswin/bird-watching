import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { Spacing } from "../../utils/Spacing";

interface Props {
  title: string;
  count: string;
}

const ProfileStat: React.FC<Props> = ({ title, count }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  count: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.PRIMARY_TEXT,
    marginBottom: -Spacing.XSMALL,
    marginHorizontal: Spacing.SMALL,
  },
});
export default ProfileStat;
