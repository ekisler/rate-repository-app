import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { loading, error, data, refetch } = useQuery(GET_REPOSITORIES);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    if (data) {
     // console.log("Data received:", data?.repositories?.edges);
      if (data?.repositories && data?.repositories?.edges) {
        const nodes = data?.repositories?.edges.map((edge) => ({
          description: edge.node.description,
          name: edge.node.name,
          forksCount: edge.node.forksCount,
          fullName: edge.node.fullName,
          language: edge.node.language,
          ownerAvatarUrl: edge.node.ownerAvatarUrl,
          ratingAverage: edge.node.ratingAverage,
          reviewCount: edge.node.reviewCount,
          stargazersCount: edge.node.stargazersCount,
        }));
        setRepositories(nodes);
        // console.log("Processed repositories:", nodes); 
      } else {
        console.error("Unexpected data structure:", data);
      }
    } else {
      console.error("No data received");
    }
  }, [data]);

  return { repositories, loading, error, refetch };
};

export default useRepositories;
