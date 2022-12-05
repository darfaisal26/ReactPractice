import React from 'react'
import { Field ,ErrorMessage} from 'formik'

const CustomSelect = (props) => {
    const {options,name}=props
    // console.log(options)
  return (
    <div>
           <Field as="select" name={name} className="genders"   >

  {
     options.map((a)=>(<option value={a.value}>{a.label}</option>))
  }
        </Field>
        
             <p className="para"><ErrorMessage name= {name}></ErrorMessage></p>
    </div>
  )
}

export default CustomSelect
