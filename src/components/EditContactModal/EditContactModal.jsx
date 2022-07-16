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
      await editContact(contact);
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
            btnContent={'Edit contact'}
            onSubmit={e => {
              e.preventDefault();
              editContactHandler({
                ...data,
                name: e.target.name.value,
                number: e.target.number.value,
              });
              closeModal();
            }}
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
