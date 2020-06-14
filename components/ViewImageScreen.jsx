import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.buttonContainer}>
        <View style={Styles.izquierdo}></View>
        <View style={Styles.derecho}></View>
      </View>
      <View>
        <ImageBackground
          style={Styles.imageContainer}
          source={require("../assets/background.jpg")}
        ></ImageBackground>
      </View>
    </View>
  );
};

export default ViewImageScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "row",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    top: 25,
  },
  imageContainer: {
    flexBasis: 500,
    // alignContent: "center",

    width: 600,
    resizeMode: "cover",
  },
  buttonContainer: {
    alignSelf: "flex-start",
    top: -90,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  izquierdo: {
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
    // position: "relative",
  },
  derecho: {
    backgroundColor: "#4ECDC4",
    width: 50,
    height: 50,
    position: "relative",
    // justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
