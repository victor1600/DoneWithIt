import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
const ViewImageScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View style={styles.up}>
        <View style={styles.separated}>
          <View style={styles.leftV} />
          <View style={styles.rightV} />
          <View />
        </View>
      </View>
      <View style={styles.center}>
        <ImageBackground
          style={styles.back}
          source={require("../assets/chair.jpg")}
        />
      </View>
      <View style={styles.down} />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  up: {
    backgroundColor: "black",
    flex: 1,
  },
  center: {
    flex: 3,
    backgroundColor: "dodgerblue",
  },
  down: {
    backgroundColor: "black",
    flex: 1,
  },
  separated: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftV: {
    backgroundColor: "#fc5c65",
    height: 60,
    width: 60,
    top: 20,
  },
  rightV: {
    backgroundColor: "#4ECDC4",
    height: 60,
    width: 60,
    top: 20,
    left: 140,
  },
  img: {},
  back: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
  },
});
