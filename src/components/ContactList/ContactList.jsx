import { useEffect } from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ListItems, Text } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => {
      const contactName = contact.name ? contact.name.toLowerCase() : '';
      return contactName.includes(normalizedFilter);
    });
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) {
    return;
  }

  return (
    <>
      {contacts.length > 0 ? ( 
        <ListItems>
          {getVisibleContacts().map((contact) => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
        </ListItems>
      ) : (
        <Text>Phonebook is empty. Add your first contact!</Text>
      )}
    </>
  );
};

export default ContactList;