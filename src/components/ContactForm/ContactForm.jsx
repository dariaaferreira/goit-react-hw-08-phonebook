import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { getContacts } from '../../redux/selectors';

import { Form, Label, Input, Button, Message } from './ContacForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidName = /^[\p{L}\s]+$/u;
    if (!isValidName.test(name)) {
      setNameError('Please enter a valid name');
      setPhoneError(null);
      return;
    }

    const isValidPhone = /^[0-9\s-]+$/;
    if (!isValidPhone.test(phone)) {
      setPhoneError('Please enter a valid phone number');
      setNameError(null);
      return;
    }

    const isDuplicateName = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicateName) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      phone,
    };
    dispatch(addContact(contact));
    setName('');
    setPhone('');
    setNameError(null);
    setPhoneError(null);
  };

  const FormError = ({ name, message }) => {
    return <Message name={name}>{message}</Message>;
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      {nameError && <FormError name="name" message={nameError} />}
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      {phoneError && <FormError name="phone" message={phoneError} />}
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
