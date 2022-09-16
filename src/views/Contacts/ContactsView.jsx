import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations.js';
import { ContactForm } from 'components/Forms/ContactForm';
import { Filter } from 'components/Forms/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import {
  PrimaryTitle,
  SecondaryTitle,
  Container,
} from 'views/commonCss.styled';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter.toLowerCase());
  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <Container>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactForm />

      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      {filter === '' ? (
        <ContactList contacts={contacts} />
      ) : (
        <ContactList contacts={filteredContacts} />
      )}
    </Container>
  );
}
