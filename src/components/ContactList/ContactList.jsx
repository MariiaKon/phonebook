import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { RiBallPenLine, RiCloseLine } from 'react-icons/ri';
import { Button } from 'components/Button/Button';
import {
  Contacts,
  ContactItem,
  InfoBox,
  Info,
  Icon,
  ButtonsBox,
} from './ContactList.styled';
import { useDeleteContactMutation } from 'redux/contacts/contactReducer';

export function ContactList({ contacts }) {
  const [deleteContact, result] = useDeleteContactMutation();
  const navigate = useNavigate();

  return (
    <Contacts>
      {contacts?.map(contact => {
        return (
          <ContactItem key={contact.id}>
            <InfoBox>
              <Icon
                style={{
                  background: `#${(
                    Math.floor(Math.random() * 220090040) * Math.random()
                  )
                    .toString(16)
                    .slice(0, 6)}`,
                }}
              >
                {contact.name[0].toUpperCase()}
              </Icon>
              <Info>{contact.name}</Info>
              <Info>{contact.number}</Info>
            </InfoBox>

            <ButtonsBox>
              <Button
                type="button"
                onClick={() => navigate(`/edit/${contact.id}`)}
                disabled={result.isLoading}
                content={<RiBallPenLine style={{ top: '6px', left: '6px' }} />}
              />
              <Button
                type="button"
                onClick={() => {
                  deleteContact(contact.id);
                }}
                disabled={result.isLoading}
                content={
                  <RiCloseLine
                    style={{
                      top: '4px',
                      left: '4px',
                      height: '1.25em',
                      width: '1.25em',
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
