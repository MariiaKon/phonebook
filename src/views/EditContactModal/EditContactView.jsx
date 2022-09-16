import { useNavigate, useOutletContext } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';
import { Container, Overlay } from 'views/commonCss.styled';
import { Label, Input } from 'components/Forms/Form.styled';
import { FormElement } from 'components/Forms/FormElement';
import { Button } from 'components/Button/Button';
import contactsOperations from 'redux/contacts/contacts-operations';

export default function Modal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contact] = useOutletContext();

  const closeModal = () => {
    navigate('/contacts');
  };

  return (
    <Overlay>
      <Container>
        {contact && (
          <FormElement
            btnContent="Edit contact"
            onSubmit={e => {
              e.preventDefault();
              dispatch(
                contactsOperations.editContact({
                  ...contact,
                  name: e.target.name.value,
                  number: e.target.number.value,
                })
              );
              closeModal();
            }}
            children={
              <>
                <Label>
                  <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -\.\][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dot, dash and spaces. For example Anne-Mary Mercer, Mr. Charles, Castelmore d'Artagnan"
                    required
                    defaultValue={contact.name}
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
                      defaultValue={contact.number}
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
