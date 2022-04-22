import { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, FilterForm } from './App.styled';

export class Filter extends Component {
  render() {
    const { onChange } = this.props;

    return (
      <FilterForm action="">
        <Label>
          Find contacts by name
          <Input type="text" onChange={onChange} />
        </Label>
      </FilterForm>
    );
  }
}

Filter.propTypes = { onChange: PropTypes.func.isRequired };
