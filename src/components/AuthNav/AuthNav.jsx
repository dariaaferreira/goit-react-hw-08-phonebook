import React from 'react';
import { Container, NavItem, IconLogin, IconReg } from './AuthNav.styled';


export default function AuthNav() {
  return (
    <Container>
      <NavItem to="/register">
      <IconReg size={24} />
      Registration
      </NavItem>
      <NavItem to="/login">
      <IconLogin size={24} />
      Login
      </NavItem>
    </Container>
  );
}