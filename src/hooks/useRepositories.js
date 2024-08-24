import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { loading, error, data, refetch } = useQuery(GET_REPOSITORIES);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    if (data) {
      if (!loading && data?.repositories?.edges) {
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
        setRepositories([...nodes]);
      } 
    } 
  }, [data, loading, error]);

  return { repositories, loading, error, refetch };
};

export default useRepositories;
