// import { useSelector } from 'react-redux';
// import { selectToken } from 'redux/user/userSelectors';
// import { Outlet, Navigate } from 'react-router-dom';

// export const PrivateRoute = () => {
//   const token = useSelector(selectToken);
//   return token ? <Outlet /> : <Navigate to={'/login'} />;
// };
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};