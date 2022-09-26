import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  width: calc(100vw - 40px);
  height: 60px;
  margin: 0 auto;
`;

export const Login = styled.div`
  width: fit-content;
  font-weight: 500;
  color: #fadccd;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Navlink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: #fadccd;

  &.active {
    text-decoration: underline;
  }
`;