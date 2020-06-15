import React from "react";

import Blocks from "./components/Blocks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { View, Text, Platform } from "react-native";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
          fontSize: 30,
        }}
      >
        I love React Native!
      </Text>
    </View>
  );
}
