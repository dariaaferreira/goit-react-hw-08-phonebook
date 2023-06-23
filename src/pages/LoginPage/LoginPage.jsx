import React from 'react';
import { Container, Title } from './LoginPage.styled';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <Container>
      <Title>Login Page</Title>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;