import React,{useState} from 'react'

const FormData = (props) => {
  return (
    <div>
        <h3>your form data</h3>
      <p >first name: {props.data.fName}</p>
      <p >last name: {props.data.lName}</p>
      <p >Email: {props.data.email}</p>
      <p >password: {props.data.password}</p>
      <p >confirm PW: {props.data.confirmPw}</p>
    </div>
  )
}

export default FormData
