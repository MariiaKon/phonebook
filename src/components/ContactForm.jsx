import { Form, Label, Input, SubmitBtn } from './App.styled';
import { nanoid } from 'nanoid';
import { addContact } from '../redux/contactReducer';
import { useDispatch } from 'react-redux';

export function ContactForm() {
  const dispatch = useDispatch();

  const formSubmitHandler = e => {
    e.preventDefault();

    dispatch(
      addContact({
        name: e.target.name.value,
        number: e.target.number.value,
        id: nanoid(),
      })
    );

    e.target.name.value = '';
    e.target.number.value = '';
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
        />
      </Label>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
}
