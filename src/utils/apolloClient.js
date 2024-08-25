// apolloClient.js
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";

// const APOLLO_URI = Constants.expoConfig.extra.env.apolloUri;
const APOLLO_URI = Constants.manifest2.extra.expoClient.extra.env.apolloUri;

const createApolloClient = (authStorage) => {
  return new ApolloClient({
    request: async (operation) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : "",
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
    uri: APOLLO_URI,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
