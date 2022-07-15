import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin: 20px auto;
  max-width: 600px;
  width: calc(100vw - 40px);
  min-width: 320px;
  border: 1px solid #c3c0c0;
  border-radius: 10px;
  background: #c3c0c090;
`;

export const PhonebookTitle = styled.h1`
  text-align: center;
`;

export const ContactsTitle = styled.h2`
  text-align: center;
  font-size: 1.8em;
`;
