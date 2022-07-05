import PropTypes from 'prop-types';
import { FaUserTimes, FaUserEdit, FaUser, FaPhoneSquare } from 'react-icons/fa';
import { Contacts, ContactItem, InfoBox, Info, ButtonsBox } from './App.styled';
// import { deleteContact } from '../redux/contactReducer';
// import { useDispatch } from 'react-redux';

export function ContactList({ contacts }) {
  // const dispatch = useDispatch();

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
              <button type="button">
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
                // onClick={() => {
                //   dispatch(deleteContact(contact.id));
                // }}
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
