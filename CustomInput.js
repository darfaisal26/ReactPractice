import React from "react";
import { Field, ErrorMessage } from "formik";
// import './Header.css'
import "./Forms.css";


const CustomInput = (props) => {



 
  return (
    <>
      <div className=" input-types">
        <label htmlFor="name" className="labels">
          {props.label}
        </label>
        <Field
          className="field-inputs "
          id=" field-inputs-about"
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}              
/>
        <p className="para">
          <ErrorMessage name={props.name} />
        </p>
      </div>
    </>
  );
};

export default CustomInput;
