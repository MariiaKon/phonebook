import { FormElement } from './FormElement';
import { Label, Input } from './Form.styled';
import InputMask from 'react-input-mask';
import { useFormHandler } from 'hooks/useFomHandler';

export function ContactForm({
  initValues = {
    name: '',
    number: '',
  },
}) {
  const { formSubmitHandler, reset } = useFormHandler(initValues);

  return (
    <FormElement
      btnContent="Add contact"
      onSubmit={e => {
        e.preventDefault();
        formSubmitHandler({
          name: e.target.name.value,
          number: e.target.number.value,
        });
        reset(e);
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
              defaultValue={initValues.name}
              autoComplete="off"
            />
            <span>Name</span>
          </Label>
          <Label>
            <InputMask mask="999-999-9999" maskChar="*">
              <Input
                type="tel"
                name="number"
                title="Phone number must be digits"
                required
                defaultValue={initValues.number}
                autoComplete="off"
              />
            </InputMask>
            <span>Number</span>
          </Label>
        </>
      }
    ></FormElement>
  );
}
