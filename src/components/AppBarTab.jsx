// AppBarTab.jsx
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "./Text";

const AppBarTab = ({ children }) => {
  return (
    <TouchableOpacity>
      <View>
        <Text color="textLight" fontWeight="bold">
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppBarTab;
