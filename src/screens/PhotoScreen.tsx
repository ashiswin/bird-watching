import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, Icon } from "react-native-elements";
import Modal from "react-native-modal";
import { Colors } from "../utils/Colors";
import { Spacing } from "../utils/Spacing";

const PhotoScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button
        onPress={() => {
          setModalVisible(true);
        }}
        buttonStyle={styles.buttonStyle}
        icon={<Icon name="camera" color={Colors.PRIMARY_ICON_ON_MEDIA} />}
      />
      <View>
        <Modal
          backdropOpacity={0.3}
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.contentView}
        >
          <View style={styles.content}>
            <Text style={styles.contentTitle}>Hi 👋!</Text>
            <Text>Hello from Overlay!</Text>
          </View>
        </Modal>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: Spacing.XXLARGE,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: Spacing.MEDIUM,
  },
  contentView: {
    justifyContent: "flex-end",
    margin: 0,
  },
  buttonStyle: {
    height: 48,
    width: 48,
    backgroundColor: "red",
    borderRadius: 48,
    marginTop: Spacing.XSMALL,
  },
});

export default PhotoScreen;
