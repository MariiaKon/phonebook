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

  @media screen and (max-width: 640px) {
    justify-content: flex-end;
  } ;
`;

export const Login = styled.div`
  width: fit-content;
  font-weight: 500;
  color: #bfb7f9;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Navlink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: #bfb7f9;
  position: relative;

  &.active {
    color: #bfb7f9;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: #bfb7f9;
      position: absolute;
      bottom: -4px;
      border-radius: 2px;
    }
  }
`;
