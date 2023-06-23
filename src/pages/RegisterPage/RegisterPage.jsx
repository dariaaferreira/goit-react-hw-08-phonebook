import React from 'react';
import { Container, Title } from './RegisterPage.styled';
import RegisterForm from 'components/RegisterForm/RegisterForm';


const RegisterPage = () => {
  return (
    <Container>
      <Title>Registration Page</Title>
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;