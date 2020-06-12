import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, styles.background]}>
      <Button
        title="Click me"
        color="orange"
        onPress={() => console.log("hi")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    backgroundColor: "orange",
  },
});
