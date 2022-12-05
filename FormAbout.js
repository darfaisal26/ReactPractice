

import React from "react";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import {  Form, Formik} from "formik";
import "./Forms.css";
import * as yup from "yup"
import CustomButton from "./CustomButton";

const FormAbout = () => {

  const defaultValues={
    dob:'',
    Age:'',
    gender:'',
    class:'',
   

  }
  const Validation=yup.object().shape({
    dob:yup.date().required("enter your dob"),
    Age:yup.number().positive("Age cant be negative").required("please enter your age"),
    gender:yup.string().required(" please enter your gender"),
    class:yup.string().required(" please enter your class")
    
  })

  const handleSubmit=(values)=>{
    console.log("values",values)
  }

 const gender = [
 {value:'',label:'select gender'},
 {value:'Male',label:'Male'},
 {value:'Female',label:'Female'}


]
 const classes=[
  {value:'',label:'select class'},
  {value:'1',label:'IST'},
  {value:'2',label:'2nd'},
  {value:'3',label:'3rd'},
  {value:'4',label:'4th'},
  {value:'5',label:'5th'},
  {value:'6',label:'6th'},
  {value:'7',label:'7th'},
  {value:'8',label:'8th'}

 ]


  return (
    <Formik  initialValues={defaultValues}
    validationSchema={Validation}
    onSubmit={handleSubmit}>
      <Form className="about-form">
        <CustomInput
          type="date"
          name="dob"
          placeholder="Enter your DOB"
          label="DOB"
         
        />

        <CustomInput
          type="number"
          name="Age"
          placeholder="Enter your Age"
          label="Age"
        />

  <CustomSelect  name="gender"  options={gender}/>
  <CustomSelect  name="class"   options={classes}/>

      
      <CustomButton type="submit" />
      </Form>
    </Formik>
  );
};

export default FormAbout;
