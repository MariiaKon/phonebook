import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactReducer';
import { DebounceInput } from 'react-debounce-input';
import { Label, Input, FilterForm } from './Form.styled';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterForm>
      <Label>
        <DebounceInput
          element={Input}
          debounceTimeout={300}
          placeholder={'Find contacts by name'}
          onChange={e => {
            dispatch(filterContacts(e.target.value));
          }}
        />
      </Label>
    </FilterForm>
  );
}
