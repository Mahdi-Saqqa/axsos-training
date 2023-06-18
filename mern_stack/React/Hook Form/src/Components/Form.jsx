import React,{useState} from 'react'

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const callUpdateForm = ()=>{
    props.updateForm(firstName,lastName,email);
  }
  return (
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => {setFirstName(e.target.value);callUpdateForm();} } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => {setLastName(e.target.value);callUpdateForm();} } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => {setEmail(e.target.value);callUpdateForm();} } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => {setPassword(e.target.value);callUpdateForm();} } />
            </div>
            <div>
                <label>Confirm PW: </label>
                <input type="text" onChange={ (e) => {setConfirmPassword(e.target.value);callUpdateForm();} } />
            </div>
        </form>
  )
}

export default Form
