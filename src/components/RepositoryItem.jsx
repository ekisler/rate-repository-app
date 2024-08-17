import React from "react";
import { View, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";
import RepositoryDetails from "./RepositoryDetails";

const RepositoryItemHeading = ({
  fullName,
  description,
  language,
  ownerAvatarUrl,
}) => {

  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 12 }}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.image} />
      </View>
      <View style={{ flex: 1 }}>
        <Text fontWeight="bold">{fullName}</Text>
        <Text color="textSecondary">{description}</Text>
        <Text style={styles.language}>{language}</Text>
      </View>
    </View>
  );
};

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeading {...props} />
    <RepositoryDetails {...props} />
  </View>
);

const styles = {
  image: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  language: {
    padding: 6,
    color: theme.colors.textLight,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 4,
    overflow: "hidden",
  },
  container: {
    padding: 12,
    paddingBottom: 6,
    paddingTop: 5,
  },
};

export default RepositoryItem;
