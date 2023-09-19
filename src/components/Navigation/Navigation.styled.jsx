import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 16px;
  font-weight: 400;
  color: #2a363b;
  &.active {
    color: #e84a5f;
  }
`;
