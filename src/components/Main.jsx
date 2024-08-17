import React from "react";
import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    paddingBottom: 12
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
    </View>
  );
};

export default Main;
