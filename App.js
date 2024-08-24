import React from "react";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import Constants  from "expo-constants"; 
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Main from "./src/components/Main";
// const APOLLO_URI = Constants.expoConfig.extra.env.apolloUri;
const APOLLO_URI = Constants.manifest2.extra.expoClient.extra.env.apolloUri;

const client = new ApolloClient({
  uri: APOLLO_URI,
  cache: new InMemoryCache(),
  debug: true,
});

const App = () => {

  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <ApolloProvider client={client}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </>
  );
};

export default App;
