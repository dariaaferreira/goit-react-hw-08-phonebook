import React from 'react';
import { Container, NavItem } from './AuthNav.styled';


export default function AuthNav() {
  return (
    <Container>
      <NavItem to="/register">Registration</NavItem>
      <NavItem to="/login">Login</NavItem>
    </Container>
  );
}