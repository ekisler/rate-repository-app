import React from "react";
import { View } from "react-native";
import Text from "./Text";

const byThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryDetails = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <Text fontWeight="bold" align="center">
          {byThousands(props.stargazersCount)}
        </Text>
        <Text>Stars</Text>
      </View>
      <View>
        <Text fontWeight="bold" align="center">
          {byThousands(props.forksCount)}
        </Text>
        <Text>Forks</Text>
      </View>
      <View align="center">
        <Text fontWeight="bold" align="center">
          {props.reviewCount}
        </Text>
        <Text>Reviews</Text>
      </View>
      <View>
        <Text  fontWeight="bold" align="center">{props.ratingAverage}</Text>
        <Text align="center">
          Rating
        </Text>
      </View>
    </View>
  );
};

export default RepositoryDetails;
