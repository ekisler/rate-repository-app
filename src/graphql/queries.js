// queries.js
import { gql } from "@apollo/client"; 

export const GET_REPOSITORIES = gql`
query GetRepositories {
  repositories {
    edges {
      node {
        description
        name
        forksCount
        fullName
        language
        ownerAvatarUrl
        stargazersCount
        ratingAverage
        reviewCount
      }
    }
  }
}
`;
