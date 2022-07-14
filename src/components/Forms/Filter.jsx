import { FaSearch } from 'react-icons/fa';
import { Label, Input, FilterForm } from './ContactForm.styled';
import { DebounceInput } from 'react-debounce-input';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactReducer';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterForm action="">
      <Label>
        <FaSearch size={'24px'} />
        <DebounceInput
          element={Input}
          debounceTimeout={300}
          placeholder="Find contacts by name"
          onChange={e => {
            dispatch(filterContacts(e.target.value));
          }}
        />
      </Label>
    </FilterForm>
  );
}
