const yup = require("yup");

//Creating an object schema

const signupSchema = yup.object().shape({
  username: yup
    .string()
    .required("Name is required")
    .trim()
    .min(4, { message: "Name must be atleast of 3 character" })
    .max(255, { message: "Name must not be more than 255 character" }),
  email: yup
    .string()
    .required("Email is required")
    .trim()
    .min(5, { message: "Email must be atleast of 3 character" })
    .max(255, { message: "Email must not be more than 255 character" }),
  phone: yup
    .string()
    .required("Phone is required")
    .trim()
    .min(10, { message: "Phone must be atleast of 10 character" })
    .max(10, { message: "Phone number cannot exceed 10 digits" }),
  password: yup
    .string()
    .required(" Password is required")
    .trim()
    .min(5, { message: "Password must be atleast of 6 character" })
    .max(255, { message: "Password  can't  be greater than 1024 character" }),
});
module.exports = signupSchema;
