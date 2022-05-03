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

  LS_KEY = 'contacts';

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(this.LS_KEY));
    if (!savedContacts) {
      localStorage.setItem(this.LS_KEY, JSON.stringify(this.state.contacts));
    }
    this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(this.LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    const isContactExist = this.state.contacts
      .map(existingContact => existingContact.name)
      .includes(contact.name);

    if (!isContactExist) {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
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
