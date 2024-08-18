import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { loginValidation } from "../validations/validationsLogin";

const SignIn = () => {
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

  return (
    <View>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginValidation}
        onSubmit={(values) => {
          console.log(values);
        }}
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
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
