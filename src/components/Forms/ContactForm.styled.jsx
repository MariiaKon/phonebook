import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #c3c0c0;
  background: #c3c0c075;
  padding: 10px;
  margin: 20px auto;
  width: 90%;
  max-width: 600px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid #c3c0c0;
  border-radius: 5px;
  height: 24px;
  padding: 4px;
  font-size: 16px;
  width: calc(100% - 28px);

  &:focus {
    outline: 2px solid #5788eb;
  }
`;

export const FilterForm = styled.form`
  margin: 10px auto;
  width: 90%;
`;
