import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";

const SignIn = () => {
  const styles = StyleSheet.create({
    allMargin: {
      margin: 12,
    },
    customButton: {
      height: 65,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#007bff",
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 18,
      color: "#ffffff",
      fontWeight: "bold",
    },
  });

  return (
    <View>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.allMargin}>
            <FormikTextInput
              name="username"
              placeholder="Username"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            <FormikTextInput
              name="password"
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
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
