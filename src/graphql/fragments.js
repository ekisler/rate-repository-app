// fragments.js
import { gql } from "apollo-boost";

export const REPOSITORY_DETAILS_FRAGMENT = gql`
  fragment RepositoryDetails on Repository {
    id
    name
    ownerName
    createdAt
    fullName
    reviewCount
    ratingAverage
    forksCount
    stargazersCount
    description
    language
    ownerAvatarUrl
  }
`;
