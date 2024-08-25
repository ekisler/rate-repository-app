import React, { useEffect, useMemo } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";
import AuthStorage from "./authStorage";

const AuthApolloProvider = ({ children }) => {

  // const APOLLO_URI = Constants.expoConfig.extra.env.apolloUri;
const APOLLO_URI = Constants.manifest2.extra.expoClient.extra.env.apolloUri;


  const apolloClient = useMemo(() => {
    const authStorage = new AuthStorage();
    return new ApolloClient({
      uri: APOLLO_URI,
      cache: new InMemoryCache(),
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
    });
  }, []);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const accessToken = await AuthStorage.getAccessToken();
      if (!accessToken) {
        // Handle no token found
        console.log("No token found");
      }
    };

    fetchAccessToken();
  }, []);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AuthApolloProvider;
