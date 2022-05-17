import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, SubmitBtn } from './App.styled';
import { nanoid } from 'nanoid';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formSubmitHandler = e => {
    e.preventDefault();
    onSubmit({ name, number, id: nanoid() });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form action="" onSubmit={formSubmitHandler}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
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
          value={number}
          onChange={e => {
            setNumber(e.target.value);
          }}
        />
      </Label>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
