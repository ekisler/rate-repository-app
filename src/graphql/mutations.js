import { gql } from "apollo-boost";

export const ADD_REPOSITORY = gql`
  mutation AddRepository($name: String!, $description: String, $url: String!) {
    AddRepository(name: $name, description: $description, url: $url) {
      id
      name
      description
      url
    }
  }
`;
