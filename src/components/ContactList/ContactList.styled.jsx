import styled from 'styled-components';

export const Contacts = styled.ul`
  width: 90%;
  list-style: none;
  border: 1px solid #bfb7f9;
  color: #bfb7f9;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  font-size: 18px;
  border: 1px solid transparent;
  transition: 250ms ease-in-out;

  &:nth-of-type(odd) {
    background-color: #302e42;
  }

  &:nth-of-type(even) {
    background-color: #3e3c55;
  }

  :hover {
    border: 1px solid #bfb7f9;
  }

  :hover > div > div {
    transform: scale(1.1);
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
`;

export const InfoBox = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
`;

export const Info = styled.div`
  &:nth-of-type(even) {
    grid-area: 1 / 2 / 2 / 3;
    font-weight: 500;
  }

  &:nth-of-type(odd) {
    grid-area: 2 / 2 / 3 / 3;
  }
`;
