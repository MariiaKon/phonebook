import styled from 'styled-components';

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
