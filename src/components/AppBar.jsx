import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";

const sytles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#24292e",
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 70,
    width: "100%",
  },
  textContainer: {
    marginLeft: 20,
  },
});

const AppBar = () => {
  return (
    <View style={sytles.container}>
      <View style={sytles.textContainer}>
        <Text color="textLight" fontWeight="bold">Repositories</Text>
      </View>
    </View>
  );
};

export default AppBar;
