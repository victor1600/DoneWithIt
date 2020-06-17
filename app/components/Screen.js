import React, { Children } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";
const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View>{children}</View>
      {/* <View style={style}>{children}</View> */}
    </SafeAreaView>
  );
};

export default Screen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
