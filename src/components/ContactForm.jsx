import { Form, Label, Input, SubmitBtn } from './App.styled';
import { FaUserPlus, FaPhoneSquare } from 'react-icons/fa';
import { useAddContactMutation } from 'redux/contactReducer';

export function ContactForm() {
  const [addContact] = useAddContactMutation();

  const formSubmitHandler = async contact => {
    //   try {
    //     await addContact(contact);
    //     console.log(contact);
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <Label>
        <FaUserPlus size={'24px'} />
        <Input
          placeholder="Enter name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // autoComplete="off"
        />
      </Label>
      <Label>
        <FaPhoneSquare size={'24px'} />
        <Input
          placeholder="XXX-XXX-XXXX"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // autoComplete="off"
        />
      </Label>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
}
