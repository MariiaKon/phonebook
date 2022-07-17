import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactReducer';
import { DebounceInput } from 'react-debounce-input';
import { FiSearch } from 'react-icons/fi';
import { Label, Input, FilterForm } from './Form.styled';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterForm action="">
      <Label>
        <FiSearch size={'24px'} />
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
