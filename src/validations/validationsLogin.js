import * as yup from "yup";

export const loginValidation = yup.object().shape({
  username: yup
    .string()
    .email("Invalid email")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Min password 5 character")
    .max(20, "Max password 20 character")
    .required("Password is required"),
});
