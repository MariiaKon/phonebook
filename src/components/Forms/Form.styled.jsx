import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #fadccd;
  background: #9b7369;
  padding: 20px 10px 10px 10px;
  margin: 20px auto;
  width: 90%;
  max-width: 600px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
  background: inherit;

  & span {
    position: absolute;
    display: inline-block;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    top: calc(50% - 14px / 2);
    left: 10px;
    color: #fadccd7f;
    transition: 250ms ease-in-out;
  }
`;

export const Input = styled.input`
  border: 1px solid #fadccd7f;
  border-radius: 5px;
  height: 36px;
  padding: 14px 10px 6px 10px;
  font-size: 16px;
  width: 100%;
  background: inherit;
  color: #fadccd;
  font-weight: 600;

  &:hover {
    outline: 1px solid #fadccd7f;
  }

  &:focus {
    outline: 1px solid #fadccd;
  }

  &:focus ~ span,
  &:valid ~ span {
    top: -8px;
    left: 14px;
    font-size: 9px;
    font-weight: 600;
    padding: 0 4px;
    color: #fadccd;
    background: inherit;
  }
`;

export const FilterForm = styled.form`
  background: inherit;
  margin: 10px 0 0 0;
  width: 90%;

  & input {
    padding: 10px;
  }

  & input::placeholder {
    font-size: 14px;
    line-height: 14px;
    color: #fadccd7f;
    font-weight: 400;
    text-transform: uppercase;
  }
`;
