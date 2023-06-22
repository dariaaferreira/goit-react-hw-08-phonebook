import React from 'react';
import { Container, Title } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};