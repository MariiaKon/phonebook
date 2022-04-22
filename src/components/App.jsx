import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { ContactsTitle, PhonebookTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const isContactExist = this.state.contacts
      .map(existingContact => existingContact.name)
      .includes(contact.name);

    if (!isContactExist) {
      const phonebook = this.state.contacts;
      phonebook.push(contact);
      this.setState({ contacts: phonebook });

      // Репета-style
      // this.setState(({ contacts }) => ({
      //   contacts: [contact, ...contacts],
      // }));
    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => id !== contact.id),
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm onSubmit={this.addContact} />

        <ContactsTitle>Contacts</ContactsTitle>
        <Filter onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onContactDelete={this.deleteContact}
        />
      </>
    );
  }
}
