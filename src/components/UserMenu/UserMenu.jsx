const { useSelector, useDispatch } = require('react-redux');
const { selectUser } = require('redux/user/userSelect');
const { logoutThunk } = require('redux/user/userThunk');

export const InfoUser = () => {
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
