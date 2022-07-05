import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0;
  margin: 20px auto;
  max-width: 600px;
  min-width: 320px;
  border: 1px solid #c3c0c0;
  border-radius: 10px;
  background: #c3c0c090;
`;

export const PhonebookTitle = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #c3c0c0;
  background: #c3c0c075;
  padding: 10px;
  margin: 20px auto;
  width: 90%;
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

export const SubmitBtn = styled.button`
  height: 24px;
  width: 50%;
  font-weight: 600;
  font-size: 12px;
`;

export const ContactsTitle = styled.h2`
  text-align: center;
  font-size: 1.8em;
`;

export const FilterForm = styled.form`
  margin: 10px auto;
  width: 90%;
`;

export const Contacts = styled.ul`
  margin: auto;
  width: 90%;
  list-style: none;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  font-size: 18px;
  border: 1px solid #c3c0c0;

  &:nth-of-type(odd) {
    background-color: #c3c0c075;
  }

  &:nth-of-type(even) {
    background-color: #c3c0c0;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  position: relative;
  padding: 0 0 0 24px;
`;
