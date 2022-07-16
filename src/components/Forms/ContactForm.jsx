import { Form, Label, Input } from './ContactForm.styled';
import { FaUserPlus, FaPhoneSquare } from 'react-icons/fa';
import { Button } from 'components/Button/Button';
import { useFormHandler } from 'hooks/useFomHandler';

export function ContactForm({
  initValues = {
    name: '',
    number: '',
  },
  btnContent = 'Add contact',
  onSubmit = function (e, formHandler, successHandler) {
    e.preventDefault();
    formHandler({
      name: e.target.name.value,
      number: e.target.number.value,
    });
    successHandler(e);
  },
}) {
  const { formSubmitHandler, reset } = useFormHandler(initValues);

  return (
    <Form
      onSubmit={e => {
        onSubmit(e, formSubmitHandler, reset);
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
          autoComplete="off"
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
          autoComplete="off"
        />
      </Label>
      <Button type="submit" content={btnContent} className="btn" />
    </Form>
  );
}
