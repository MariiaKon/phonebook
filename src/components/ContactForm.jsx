import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, SubmitBtn } from './App.styled';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChangeHandler = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
      id: nanoid(),
    });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form action="" onSubmit={this.formSubmitHandler}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
            value={this.state.name}
            onChange={this.inputChangeHandler}
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
            value={this.state.number}
            onChange={this.inputChangeHandler}
          />
        </Label>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    );
  }
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
