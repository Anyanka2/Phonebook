import {StyledNavLink} from './Navigation.styled'
import { useAuth } from '../../hooks/useAuth';
import Button from '@mui/material/Button';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledNavLink to="/">
         <Button href="#text-buttons" sx={{ color: '#e88606' }}>home</Button>
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink to="/contacts">
          <Button href="#text-buttons" sx={{ color: '#e88606' }}>phonebook</Button>
        </StyledNavLink>
      )}
    </nav>
  );
};
