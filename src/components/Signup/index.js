import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import api from '../../features/api/api';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './LoginElements'

// import {setUsernameReg, setPasswordReg, register} from './src/App2';

const SignUp = () => {
  // let history = useNavigate();
  const [data, setData]=useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setData({ ...data, [e.target.name]: e.target.value}) 
  }

  const handleSend = e => {
    api.login(data);
  }

  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">Genesis Farm</Icon>
            <FormContent>
                <Form>
                    <FormH1>Login</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' name='email' onChange={handleChange}  required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' name='password' onChange={handleChange}  required />
                    {/* <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                    <FormInput type='password' name='confirm_password' onChange={handleChange} value={data.confirm_password} required /> */}
                    <FormButton type='submit' value='submit' name='submit' onClick={handleSend} >Sign Up</FormButton>
                    
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  );
};

export default SignUp