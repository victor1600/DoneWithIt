import React from "react";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, Platform } from "react-native";

// import AppButton from "./app/components/AppButton";
// import colors from "./app/config/colors";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
export default function App() {
  return <ViewImageScreen />; //<ListingDetailsScreen />; //<WelcomeScreen />;
}
