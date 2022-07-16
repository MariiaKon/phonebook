import { Form, Label, Input } from './ContactForm.styled';
import { FaUserPlus, FaPhoneSquare } from 'react-icons/fa';
import { Button } from 'components/Button/Button';
import { useAddContactMutation } from 'redux/contactReducer';
import { useSelector } from 'react-redux';

export function ContactForm({
  initValues = {
    name: '',
    number: '',
  },
  children = <Button type="submit" content={'Add contact'} className="btn" />,
}) {
  const existingContactsArr = useSelector(
    state => Object.values(state.contacts?.queries)[0]?.data
  );
  const [addContact] = useAddContactMutation();

  const formSubmitHandler = async contact => {
    const existingContacts = existingContactsArr.map(contact => contact.name);

    if (existingContacts.includes(contact.name)) {
      alert(`${contact.name} is already exists`);
      return;
    }

    try {
      await addContact(contact);
    } catch (error) {
      console.log(error);
    }
  };

  const reset = e => {
    e.target.name.value = initValues.name;
    e.target.number.value = initValues.number;
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        formSubmitHandler({
          name: e.target.name.value,
          number: e.target.number.value,
        });
        reset(e);
      }}
    >
      <Label>
        <FaUserPlus size={'24px'} />
        <Input
          placeholder="Enter name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          defaultValue={initValues.name}
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
          defaultValue={initValues.number}
          // autoComplete="off"
        />
      </Label>
      {children}
      {/* {<Button type="submit" content={submitBtnContent} className="btn" />} */}
    </Form>
  );
}
