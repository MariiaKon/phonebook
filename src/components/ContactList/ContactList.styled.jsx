import styled from 'styled-components';

export const Contacts = styled.ul`
  margin: auto;
  width: 90%;
  list-style: none;
  border: 1px solid #fadccd;
  color: #0d0c0c;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  font-size: 18px;

  &:nth-of-type(odd) {
    background-color: #9b7369;
  }

  &:nth-of-type(even) {
    background-color: #b98775;
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

export const Icon = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #0d0c0c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: #fadccd;
  text-shadow: #0d0c0c 0 0 4px;
`;
