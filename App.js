import React from "react";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Main from "./src/components/Main";

const client = new ApolloClient({
  uri: "https://f62c-190-114-247-131.ngrok-free.app/graphql",
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
