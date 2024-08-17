// AppBar.jsx
import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.colors.backgroundColor,
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
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <AppBarTab>Repositories</AppBarTab>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;
