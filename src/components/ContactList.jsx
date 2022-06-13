import PropTypes from 'prop-types';
import { Contacts, ContactItem, DeleteBtn } from './App.styled';
import { deleteContact } from '../redux/contactReducer';
import { useDispatch } from 'react-redux';

export function ContactList({ contacts }) {
  const dispatch = useDispatch();

  return (
    <Contacts>
      {contacts?.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem>
              {contact.name}: {contact.number}
              <DeleteBtn
                type="button"
                onClick={() => {
                  dispatch(deleteContact(contact.id));
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
};
