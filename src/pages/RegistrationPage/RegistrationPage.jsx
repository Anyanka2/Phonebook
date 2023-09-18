import { Helmet } from 'react-helmet';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

 const SignUp = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
}
export default SignUp;
// import { signUpThunk } from 'redux/user/userThunk';
// const { useDispatch } = require('react-redux');
// const { useState } = require('react');

// export const SignUp = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = event => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
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

//     dispatch(signUpThunk({ email, password, name }))
//       .unwrap()
//       .then(() => {
//         setEmail('');
//         setPassword('');
//         setName('');
//       });
//   };
//   return (
//     <div>
//       <form onSubmit={handleOnSubmit}>
//         <label>User Name</label>
//         <input
//           onChange={handleChange}
//           name="name"
//           value={name}
//           type="text"
//           placeholder="Enter your  name"
//         />
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
//           minlength="9"
//           required
//         />

//         <button type="submit">Sign up</button>
//       </form>
//     </div>
//   );
// };
