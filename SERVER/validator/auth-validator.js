const yup = require("yup");

//Creating an object schema

const userSchema = yup.object().shape({
  username: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  age: yup
    .number()
    .positive("Age must be positive")
    .integer("Age must be an integer")
    .min(18, "Must be 18 or older"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  // Add more fields and validation rules as needed
});
