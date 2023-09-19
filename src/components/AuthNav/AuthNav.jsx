import { StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/signup">Registration</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </div>
  );
};
