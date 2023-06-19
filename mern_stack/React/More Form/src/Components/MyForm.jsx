import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid,Paper } from '@mui/material';
import { AccountCircle, Email, Lock } from '@mui/icons-material';

const MyForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validateFirstName, setValidateFirstName] = useState('');
  const [validateLastName, setValidateLastName] = useState('');
  const [validateEmail, setValidateEmail] = useState('');
  const [validatePassword, setValidatePassword] = useState('');
  const [validateConfirmPassword, setValidateConfirmPassword] = useState('');

  const validateData = () => {
    if (email.length < 5) {
      setValidateEmail('Email must be at least 5 characters');
    } else {
      setValidateEmail('');
    }
    if (password.length < 8) {
      setValidatePassword('Password must be at least 8 characters');
    } else {
      setValidatePassword('');
    }
    if (confirmPassword !== password) {
      setValidateConfirmPassword('Confirm Password does not match');
    } else {
      setValidateConfirmPassword('');
    }
  };

  useEffect(() => {
    if (firstName.length < 2&& firstName.length!=0) {
      setValidateFirstName('First Name must be at least 2 characters');
    } else {
      setValidateFirstName('');
    }

  }, [firstName])

  useEffect(() => {
    if (lastName.length < 2&&lastName.length!=0) {
      setValidateLastName('Last Name must be at least 2 characters');
    } else {
      setValidateLastName('');
    }

  }, [lastName])
  useEffect(()=>{
    if(email.length<5&&email.length!=0){
      setValidateEmail('Email must be at least 5 characters');
    }
    else{
      setValidateEmail('');
    }
  },[email])
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    // validateData();
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    validateData();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateData();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateData();
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validateData();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateData();
  };

  return (
    <div>
<Paper elevation={3}  sm={6}>
        <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              error={!!validateFirstName}
              helperText={validateFirstName}
              InputProps={{
                startAdornment: <AccountCircle />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
              error={!!validateLastName}
              helperText={validateLastName}
              InputProps={{
                startAdornment: <AccountCircle />,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              error={!!validateEmail}
              helperText={validateEmail}
              InputProps={{
                startAdornment: <Email />,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              error={!!validatePassword}
              helperText={validatePassword}
              InputProps={{
                startAdornment: <Lock />,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={!!validateConfirmPassword}
              helperText={validateConfirmPassword}
              InputProps={{
                startAdornment: <Lock />,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
        </Paper>
    </div>
  );
};

export default MyForm;
