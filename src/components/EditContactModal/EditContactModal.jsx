import { useNavigate, useParams } from 'react-router-dom';
import { Overlay } from './EditContactsModal.styled';
import { Container } from 'components/App.styled';
import { ContactForm } from 'components/Forms/ContactForm';
import { Button } from 'components/Button/Button';
import {
  useGetContactByIdQuery,
  useEditContactMutation,
} from 'redux/contactReducer';

export function Modal() {
  const navigate = useNavigate();
  const { contactId } = useParams();
  const { data } = useGetContactByIdQuery(contactId);
  const closeModal = () => {
    navigate('/');
  };
  const [editContact] = useEditContactMutation();

  const editContactHandler = async contact => {
    try {
      if (contact.name.trim() === '' || contact.number.trim() === '') {
        alert('Please, fill all the fields');
        return;
      }

      await editContact(contact);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Overlay>
      <Container>
        {data && (
          <ContactForm
            initValues={{ name: data.name, number: data.number }}
            children={
              <Button
                type="button"
                content="Edit contact"
                className="btn"
                onClick={e => {
                  const form = e.target.offsetParent.childNodes[0];
                  editContactHandler({
                    ...data,
                    name: form.name.value,
                    number: form.number.value,
                  });
                }}
              />
            }
          />
        )}

        <Button
          type="button"
          className="btn"
          onClick={closeModal}
          content={'Cancel'}
        />
      </Container>
    </Overlay>
  );
}
