import React from "react";

import { View, ImageBackground, StyleSheet, Text, Image } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.back}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logotxt}>
          <View style={styles.centered}>
            <Image
              style={styles.logo}
              source={require("../assets/logo-red.png")}
            />
            <Text style={styles.txtStyle}>Sell what you dont need</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.roja} />
      <View style={styles.verde} />
      <View style={styles.footer}></View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  back: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
  },
  roja: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 65,
  },
  verde: {
    backgroundColor: "#4ECDC4",
    width: "100%",
    height: 65,
  },
  centered: {
    // flexDirection: "row",
    // justifyContent: "center",
    alignContent: "center",
    top: 50,
  },
  logo: {
    left: 30,
    width: 100,
    height: 100,
  },
  txtStyle: {
    flexDirection: "column",
    fontSize: 15,
  },
  logotxt: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
