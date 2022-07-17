import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaUserTimes, FaUserEdit, FaUser, FaPhoneSquare } from 'react-icons/fa';
import { Button } from 'components/Button/Button';
import {
  Contacts,
  ContactItem,
  InfoBox,
  Info,
  ButtonsBox,
} from './ContactList.styled';
import { useDeleteContactMutation } from 'redux/contactReducer';

export function ContactList({ contacts }) {
  const [deleteContact, result] = useDeleteContactMutation();
  const navigate = useNavigate();

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
              <Button
                type="button"
                onClick={() => navigate(`/edit/${contact.id}`)}
                disabled={result.isLoading}
                content={
                  <FaUserEdit
                    style={{
                      size: '20px',
                      top: '8px',
                      left: '8px',
                    }}
                  />
                }
              />
              <Button
                type="button"
                onClick={() => {
                  deleteContact(contact.id);
                }}
                disabled={result.isLoading}
                content={
                  <FaUserTimes
                    style={{
                      size: '20px',
                      top: '8px',
                      left: '8px',
                    }}
                  />
                }
              />
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
