// AppBar.jsx
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Link, useLocation } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.colors.backgroundColor,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 24,
  },
  scroll: {
    paddingBottom: 12,
  },
  text: {
    paddingHorizontal: 12,
  },
});

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  const textStyles = [styles.text, active && styles.active];

  return (
    <Link to={to}>
      <Text
        color="textLight"
        fontWeight="bold"
        style={[styles.text, { marginTop: 10 }, textStyles]}
      >
        {children}
      </Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab active to="/">
          Repositories
        </AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
