import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/user/userThunk';
import { useAuth } from '../../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};

// import { useSelector, useDispatch } from 'react-redux';
// import { selectUser } from '../../redux/user/userSelectors';
// import { logoutThunk }from '../../redux/user/userThunk';

// export const UserMenu = () => {
//   const user = useSelector(selectUser);
//   const dispatch = useDispatch();
//   const handleSubmit = () => {
//     dispatch(logoutThunk());
//   };
//   return (
//     <div>
//       {user && (
//           <button
//             onClick={handleSubmit}
//           >
//             Log Out
//           </button>
//       )}
//     </div>
//   );
// };
