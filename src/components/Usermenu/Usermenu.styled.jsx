import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 600px;
  width: calc(100vw - 40px);
  height: 60px;
  margin: 0 auto;

  & > * {
    margin-left: 20px;
  }
`;

export const Login = styled.div`
  width: fit-content;
  font-weight: 500;
  color: #fadccd;
`;
