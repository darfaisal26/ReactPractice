
import React from "react";
import CustomInput from "./CustomInput";
import {  Field, Form, Formik ,ErrorMessage} from "formik";
import "./Forms.css";
import * as yup from "yup"

const FormContact = () => {

  const defaultValues={
    phone:'',
    address:'',
    termsAndConditions:false

  }

  const Validation=yup.object().shape({
    phone:yup.number().required("phone number is required").typeError("does not look like a number")
    .integer("A phone number can't include a decimal point")
    .min(1000000000).max(9999999999).required("enter your phone number"),
    address:yup.string().required("enter your address"),
    termsAndConditions:yup.boolean().oneOf([true],'before submitting accept terms and conditions')

  })
  const handleSubmit=(values)=>{
    console.log("values",values)
  }

  return (
    <Formik  initialValues={defaultValues}
    validationSchema={Validation}
    onSubmit={handleSubmit}>
      <Form className="contact-form">
        <CustomInput
          type="number"
          name="phone"
          placeholder="Enter your phone number"
          label="Phone number"
        />
         <CustomInput
          type="text"
          name="address"
          placeholder="Enter your Adress"
          label="Address"
        />
       <div>

        <label className="checkbox">
               Accept Terms and Conditions
          <Field type="checkbox" name="termsAndConditions"/>
        </label>
        <p className="para"><ErrorMessage name= "termsAndConditions"></ErrorMessage></p>

       </div>
        <button type="submit" id="btn">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormContact;
