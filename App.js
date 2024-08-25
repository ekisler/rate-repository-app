import React from "react";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import Main from "./src/components/Main";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/context/AuthStorageContext";
import { ApolloProvider } from "@apollo/client";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);
// import AuthApolloProvider from "./src/utils/AuthApolloProvider";

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
          <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </>
  );
};

export default App;
