import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  color: black; 
  margin-right: 20px;
  font-family: Consolas;

  :hover,
  :focus {
    transform: scale(1.1);
  }

  &.active {
    font-weight: bold;
    color: #2196F3;
  }

  &:nth-of-type(2) {
    margin-right: 0;
  }
`;