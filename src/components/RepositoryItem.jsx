import React from "react";
import { View, Image, TouchableWithoutFeedback , StyleSheet} from "react-native";
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
    <View style={styles.row}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text fontWeight="bold">{fullName}</Text>
        <Text color="textSecondary">{description}</Text>
        <Text style={styles.language}>{language}</Text>
      </View>
    </View>
  );
};

const RepositoryItem = (props) => (
  <TouchableWithoutFeedback>
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeading {...props} />
      <RepositoryDetails {...props} />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingBottom: 2,
  },
  avatarContainer: {
    paddingRight: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  textContainer: {
    flex: 1,
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
});

export default RepositoryItem;
