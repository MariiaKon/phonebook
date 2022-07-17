import { useSelector } from 'react-redux';
import { useAddContactMutation } from 'redux/contacts/contactReducer';

export const useFormHandler = initValues => {
  const [addContact] = useAddContactMutation();

  const existingContactsArr = useSelector(
    state => Object.values(state.contacts?.queries)[0]?.data
  );

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

  return { formSubmitHandler, reset };
};
