import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
  title: string,
  count: string,
}

const ProfileStat: React.FC<Props> = ({title, count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  count: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: -4,
    marginHorizontal: 8
  }
})
export default ProfileStat;