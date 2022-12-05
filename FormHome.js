import React from "react";
import CustomInput from "./CustomInput";
import { Form, Formik } from "formik";
import "./Forms.css";
import * as yup from "yup"

const FormHome = () => {

  const defaultValues = {
    name: '',
    email: '',
    password: '',

  }
  const Validation = yup.object().shape({
    name: yup.string().min(2, 'too short').max(30, 'too long').required("please enter your name"),
    email: yup.string().email('Invalid email').required("please enter your email id"),
    password: yup.string().min(8).required("please set password"),

  })
  const handleSubmit = (values) => {
    console.log("values", values)
  }
  return (
    <Formik initialValues={defaultValues}
      validationSchema={Validation}
      onSubmit={handleSubmit}>
      <Form className="form">
        <CustomInput
          type="text"
          name="name"
          placeholder="Enter your name"
          label="Name"
        />

        <CustomInput
          type="email"
          name="email"
          placeholder="Enter your email id"
          label="Email"
        />

        <CustomInput
          type="password"
          name="password"
          placeholder="Enter your password"
          label="Password"
        />


        <button type="submit" id="btn">
          Sign in
        </button>
      </Form>
    </Formik>
  );
};

export default FormHome;
