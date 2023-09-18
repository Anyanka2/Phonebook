import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/signup">
        Registration
      </NavLink>
      <NavLink to="/login">
        Log In
      </NavLink>
    </div>
  );
};