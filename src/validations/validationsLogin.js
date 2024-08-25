import * as yup from "yup";

export const loginValidation = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be less than 20 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Min password 5 character")
    .max(20, "Max password 20 character")
    .required("Password is required"),
});
