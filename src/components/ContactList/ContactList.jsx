import PropTypes from 'prop-types';
import { FaUserTimes, FaUserEdit, FaUser, FaPhoneSquare } from 'react-icons/fa';
import {
  Contacts,
  ContactItem,
  InfoBox,
  Info,
  ButtonsBox,
} from './ContactList.styled';
import {
  useDeleteContactMutation,
  useEditContactMutation,
} from 'redux/contactReducer';

export function ContactList({ contacts }) {
  const [deleteContact] = useDeleteContactMutation();
  const [editContact] = useEditContactMutation();

  const editContactHandler = id => {
    editContact(id);
  };

  return (
    <Contacts>
      {contacts?.map(contact => {
        return (
          <ContactItem key={contact.id}>
            <InfoBox>
              <Info>
                <FaUser
                  style={{
                    size: '16px',
                    top: '2px',
                  }}
                />
                {contact.name}
              </Info>
              <Info>
                <FaPhoneSquare
                  style={{
                    size: '16px',
                    top: '2px',
                  }}
                />
                {contact.number}
              </Info>
            </InfoBox>

            <ButtonsBox>
              <button
                type="button"
                onClick={() => {
                  editContactHandler(contact.id);
                }}
              >
                <FaUserEdit
                  style={{
                    size: '20px',
                    top: '8px',
                    left: '8px',
                  }}
                />
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteContact(contact.id);
                }}
              >
                <FaUserTimes
                  style={{
                    size: '20px',
                    top: '8px',
                    left: '8px',
                  }}
                />
              </button>
            </ButtonsBox>
          </ContactItem>
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
