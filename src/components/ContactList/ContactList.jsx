import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RiBallPenLine, RiCloseLine } from 'react-icons/ri';
import contactsOperations from 'redux/contacts/contacts-operations';
import { Button } from 'components/Button/Button';
import { Icon } from 'views/commonCss.styled';
import {
  Contacts,
  ContactItem,
  InfoBox,
  Info,
  ButtonsBox,
} from './ContactList.styled';

export function ContactList({ contacts }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  return (
    <>
      <Contacts>
        {contacts?.map(contact => {
          return (
            <ContactItem key={contact.id}>
              <InfoBox>
                <Icon
                  style={{
                    gridArea: '1 / 1 / 3 / 2',
                    background: `#${(
                      parseInt(contact.id, 16) * parseInt(contact.id, 10)
                    )
                      .toString(16)
                      .slice(2, 8)}`,
                  }}
                >
                  {contact.name[0].toUpperCase()}
                </Icon>
                <Info>{contact.name}</Info>
                <Info>{contact.number}</Info>
              </InfoBox>

              <ButtonsBox>
                <Button /* edit btn */
                  type="button"
                  onClick={() => {
                    navigate(`/contacts/edit/${contact.id}`);
                    setContact(contact);
                  }}
                  content={
                    <RiBallPenLine style={{ top: '6px', left: '6px' }} />
                  }
                />
                <Button /* delete btn */
                  type="button"
                  onClick={() => {
                    dispatch(contactsOperations.deleteContact(contact.id));
                  }}
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

      <Outlet context={[contact]} />
    </>
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
