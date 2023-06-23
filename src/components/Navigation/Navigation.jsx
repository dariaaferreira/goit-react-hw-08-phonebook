import React from 'react';
import { NavItem, Nav } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      {isLoggedIn ? null : <NavItem to="/">Phonebook</NavItem>}
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </Nav>
  );
};

export default Navigation;
