import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

 const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
export default Login;
// import Notiflix from 'notiflix';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginThunk } from 'redux/user/userThunk';

// export const Login = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = event => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;
//       case 'password':
//         setPassword(value);
//         break;
//       default:
//         throw new Error();
//     }
//   };

//   const handleOnSubmit = event => {
//     event.preventDefault();

//     dispatch(loginThunk({ email, password }))
//       .unwrap()
//       .then(() => {
//         setEmail('');
//         setPassword('');
//       })
//       .catch(() => Notiflix.Notify.failure(`Incorrect login or password`));
//   };

//   return (
//     <div>
//       <form onSubmit={handleOnSubmit}>
//         <label>Email address</label>
//         <input
//           onChange={handleChange}
//           name="email"
//           value={email}
//           type="email"
//           placeholder="Enter email"
//         />
//         <label>Password</label>
//         <input
//           onChange={handleChange}
//           type="password"
//           name="password"
//           value={password}
//           placeholder="Password"
//         />
//         <button type="submit">Log in</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
