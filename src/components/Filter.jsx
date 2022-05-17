import PropTypes from 'prop-types';
import { Label, Input, FilterForm } from './App.styled';

export function Filter({ onChange }) {
  return (
    <FilterForm action="">
      <Label>
        Find contacts by name
        <Input type="text" onChange={onChange} />
      </Label>
    </FilterForm>
  );
}

Filter.propTypes = { onChange: PropTypes.func.isRequired };
