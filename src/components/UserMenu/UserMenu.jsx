import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/user/userSelectors';
import { logoutThunk }from '../../redux/user/userThunk';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logoutThunk());
  };
  return (
    <div>
      {user && (
          <button
            onClick={handleSubmit}
          >
            Log Out
          </button>
      )}
    </div>
  );
};
