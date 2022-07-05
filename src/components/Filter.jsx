import { FaSearch } from 'react-icons/fa';
import { Label, Input, FilterForm } from './App.styled';
// import { useDispatch } from 'react-redux';
// import { filter } from '../redux/contactReducer';

export function Filter() {
  // const dispatch = useDispatch();

  return (
    <FilterForm action="">
      <Label>
        <FaSearch size={'24px'} />
        <Input
          placeholder="Find contacts by name"
          type="text"
          // onChange={e => {
          //   dispatch(filter(e.target.value));
          // }}
        />
      </Label>
    </FilterForm>
  );
}
