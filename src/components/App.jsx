import { useState, useEffect, useMemo } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { ContactsTitle, PhonebookTitle } from './App.styled';

export function App() {
  console.log('app 8');
  const LS_KEY = 'contacts';
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
  });
  const [filter, setFilter] = useState('');
  console.log('app 13');
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const isContactExist = contacts
      .map(existingContact => existingContact.name)
      .includes(contact.name);

    if (!isContactExist) {
      setContacts([contact, ...contacts]);
    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };
  console.log('app 29');
  const deleteContact = id => {
    setContacts(contacts.filter(contact => id !== contact.id));
  };

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }, [contacts, filter]);
  console.log('app 39');
  return (
    <>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm onSubmit={addContact} />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter
        onChange={e => {
          setFilter(e.currentTarget.value);
        }}
      />
      <ContactList
        contacts={filteredContacts}
        onContactDelete={deleteContact}
      />
    </>
  );
}
