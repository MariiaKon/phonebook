import { Component } from 'react';
import PropTypes from 'prop-types';
import { Contacts, ContactItem, DeleteBtn } from './App.styled';

export class ContactList extends Component {
  render() {
    const { onContactDelete, contacts } = this.props;

    return (
      <Contacts>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <ContactItem>
                {contact.name}: {contact.number}
                <DeleteBtn
                  type="button"
                  onClick={() => {
                    onContactDelete(contact.id);
                  }}
                >
                  Delete
                </DeleteBtn>
              </ContactItem>
            </li>
          );
        })}
      </Contacts>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func.isRequired,
};
