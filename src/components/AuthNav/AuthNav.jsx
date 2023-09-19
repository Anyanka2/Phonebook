import { StyledNavLink } from './AuthNav.styled';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/signup">
        <Button href="#text-buttons" sx={{ color: '#e88606' }}>registration</Button>
      </StyledNavLink>
      <StyledNavLink to="/login">
        <Button href="#text-buttons" sx={{ color: '#e88606' }}>log in</Button>
      </StyledNavLink>
    </div>
  );
};
