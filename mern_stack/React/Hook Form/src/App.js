import './App.css';
import React,{useState} from 'react'
import Form from './Components/Form';
import FormData from './Components/FormData';
function App() {
  const [data, setData] = useState({
    fName: '',
    lName: '',
    email: '',
    password: 'password',
    confirmPw: 'password'
  });

  const updateForm = (fName, lName, email) => {
    setData({
      fName: fName,
      lName: lName,
      email: email,
      password: 'password',
      confirmPw: 'password'
    });
  };
  const Style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 'auto',
    width: '50%',
    border: '1px solid black',
    padding: '20px',
  }
  return (
    <div style={Style}>
      <Form updateForm={updateForm} />
      <FormData data={data} />
    </div>
  );
  }
export default App;
