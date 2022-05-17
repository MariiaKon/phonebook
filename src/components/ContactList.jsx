import PropTypes from 'prop-types';
import { Contacts, ContactItem, DeleteBtn } from './App.styled';

export function ContactList({ onContactDelete, contacts }) {
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
