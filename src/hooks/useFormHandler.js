import { useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import {
  successNotify,
  warnNotify,
} from 'components/Notifications/ToastNotifictions';

export const useFormHandler = initValues => {
  const dispatch = useDispatch();
  const existingContactsArr = useSelector(state => state.contacts.items);

  const formSubmitHandler = contact => {
    const existingContacts = existingContactsArr.map(contact => contact.name);

    if (existingContacts.includes(contact.name)) {
      warnNotify(`${contact.name} is already exists`);
      return;
    }

    try {
      dispatch(contactsOperations.addContact(contact));
      successNotify('Contact successfully added');
    } catch (error) {}
  };

  const reset = e => {
    e.target.name.value = initValues.name;
    e.target.number.value = initValues.number;
    dispatch(contactsOperations.getContacts());
  };

  return { formSubmitHandler, reset };
};
