import React from 'react';
import PropTypes from 'prop-types';
import { Item, Span, Button } from './ContactListItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

    return (
    <Item>
      <Span>{name}:</Span> {number}
      <Button onClick={() => dispatch(deleteContact(id))}>✕</Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;
