import React from "react";
import { View, Text, Image } from "react-native";

const RepositoryItem = ({
  id,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  return (
    <View style={{ marginLeft: 6}}>
      <Image
        source={{ uri: ownerAvatarUrl }}
        style={{ width: 50, height: 50 }}
      />
      <Text>{id}</Text>
      <Text>fullName: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {forksCount}</Text>
      <Text>Forks: {stargazersCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
