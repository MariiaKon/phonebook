import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';
import { Container, Overlay } from 'views/commonCss.styled';
import { Label, Input } from 'components/Forms/Form.styled';
import { FormElement } from 'components/Forms/FormElement';
import { Button } from 'components/Button/Button';
import { filterContacts } from 'redux/contacts/filterSlice';
import {
  useGetContactByIdQuery,
  useEditContactMutation,
} from 'redux/contacts/contactReducer';

export default function Modal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contactId } = useParams();
  const { data } = useGetContactByIdQuery(contactId);
  const closeModal = () => {
    navigate('/contacts');
    dispatch(filterContacts(''));
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
          <FormElement
            btnContent="Edit contact"
            onSubmit={e => {
              e.preventDefault();
              editContactHandler({
                ...data,
                name: e.target.name.value,
                number: e.target.number.value,
              });
              closeModal();
            }}
            children={
              <>
                <Label>
                  <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' - .][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dot, dash and spaces. For example Anne-Mary Mercer, Mr. Charles, Castelmore d'Artagnan"
                    required
                    defaultValue={data.name}
                    autoComplete="off"
                  />
                  <span>Edit name</span>
                </Label>
                <Label>
                  <InputMask mask="999-999-9999">
                    <Input
                      type="tel"
                      name="number"
                      title="Phone number must be digits"
                      required
                      defaultValue={data.number}
                      autoComplete="off"
                    />
                  </InputMask>
                  <span>Edit number</span>
                </Label>
              </>
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
