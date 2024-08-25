import { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useApolloClient } from "@apollo/client";
import { Formik } from "formik";
import useSignIn from "../hooks/useSignIn";
import FormikTextInput from "./FormikTextInput";
import { loginValidation } from "../validations/validationsLogin";
import AuthStorage from "../utils/authStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = () => {
  const [signIn] = useSignIn();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);
  const apolloClient = useApolloClient();

  const styles = StyleSheet.create({
    allMargin: {
      margin: 12,
    },
    customButton: {
      height: 55,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#007bff",
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 16,
      color: "#ffffff",
      fontWeight: "bold",
    },
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const username = values.username.trim();
      const password = values.password.trim();
      const result = await signIn({ username, password });
      // console.log("User authenticated:", result);
      setUsername(result.username);
      setToken(result.accessToken);

      await AsyncStorage.setItem("access_token", result.accessToken);

      apolloClient.resetStore();
    } catch (error) {
      console.log("Error in sesion:", error);
      setError(error.message || "Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username && token) {
      const authStorage = new AuthStorage("auth");
      authStorage.setAccessToken(token);
      authStorage.setUserName(username);
    }
  }, [username, token]);

  return (
    <View>
      {username && token && (
        <Text style={styles.successMessage}>Welcome, {username}!</Text>
      )}
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginValidation}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <View style={styles.allMargin}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.customButton}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>
                {loading ? "Loading..." : "Sign in"}
              </Text>
            </TouchableOpacity>
            {error && <Text style={{ color: "red" }}>{error}</Text>}
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
