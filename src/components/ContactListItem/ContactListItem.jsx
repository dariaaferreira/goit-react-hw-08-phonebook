import React from 'react';
import PropTypes from 'prop-types';
import { Item, Span, Button } from './ContactListItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

const ContactListItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

    return (
    <Item>
      <Span>{name}:</Span> {phone}
      <Button onClick={() => dispatch(deleteContact(id))}>✕</Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;
