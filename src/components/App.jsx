// import { useMemo } from 'react';
import { ContactForm } from './Forms/ContactForm';
import { Filter } from './Forms/Filter';
import { ContactList } from './ContactList/ContactList';
// import { Modal } from './EditContactModal/EditContactModal';
import { ContactsTitle, PhonebookTitle, Container } from './App.styled';
// import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactReducer';

export function App() {
  // const contacts = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.contacts.filter);

  // const filteredContacts = useMemo(() => {
  //   return contacts?.filter(contact =>
  //     contact.name.toLowerCase().includes(filter)
  //   );
  // }, [contacts, filter]);

  const { data } = useGetContactsQuery();

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList contacts={data} />
      {/* <Modal /> */}
    </Container>
  );
}
