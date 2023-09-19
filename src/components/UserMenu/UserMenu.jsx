import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/user/userThunk';
import { useAuth } from '../../hooks/useAuth';
import { UserText } from './UserMenu.styled';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <UserText>Welcome, {user.name}!</UserText>
      <Button type="button" sx={{ color: '#e88606' }}onClick={() => dispatch(logoutThunk())}>
        Logout
      </Button>
    </div>
  );
};



