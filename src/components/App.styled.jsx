import styled from 'styled-components';

export const PhonebookTitle = styled.h1`
  text-align: center;
  margin: 20px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  margin: 10px auto;
  width: 60vw;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid #c3c0c0;
  border-radius: 5px;
  height: 24px;
  margin-top: 4px;
  padding: 4px;

  &:focus {
    outline: 2px solid #5788eb;
  }
`;

export const SubmitBtn = styled.button`
  height: 24px;
  width: 50%;
  font-weight: 600;
  background-color: #fff;
  border: 1px solid #c3c0c0;
  border-radius: 5px;

  &:hover,
  :active,
  :focus {
    background-color: #dadada;
    outline: 2px solid #5788eb;
  }
`;

export const ContactsTitle = styled.h2`
  text-align: center;
  margin: 20px 0;
  font-size: 1.8em;
`;

export const FilterForm = styled.form`
  margin: 10px auto;
  width: 60vw;
`;

export const Contacts = styled.ul`
  margin: 10px auto;
  width: 60vw;
  padding-left: 20px;
`;

export const ContactItem = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  font-size: 18px;
`;

export const DeleteBtn = styled.button`
  background-color: #fff;
  border: 1px solid #c3c0c0;
  border-radius: 5px;
  padding: 1px 6px;
  font-size: 12px;

  &:hover,
  :active,
  :focus {
    background-color: #dadada;
    outline: 2px solid #5788eb;
  }
`;
