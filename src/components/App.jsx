import { ContactForm } from './Forms/ContactForm';
import { Filter } from './Forms/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactsTitle, PhonebookTitle, Container } from './App.styled';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactReducer';

export function App() {
  const { data } = useGetContactsQuery();
  const filter = useSelector(state => state.filter.filter);
  const filteredContacts = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {filter === '' ? (
        <ContactList contacts={data} />
      ) : (
        <ContactList contacts={filteredContacts} />
      )}
    </Container>
  );
}
