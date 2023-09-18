import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import ContactFrom from '../components/ContactForm/ContactForm';
// import ContactList from '../components/ContactList/ContactList';
// import Filter from '../components/Filter/Filter';
// import { Loader } from 'components/Loader/Loader';
// import { Container, Title, SubTitle } from './App.styled';
// import { useSelector } from 'react-redux';
// import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

import { refreshUserThunk } from 'redux/user/userThunk';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

const SignUp = lazy(() => import('../pages/RegistrationPage/RegistrationPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage'));
const Contacts = lazy(() => import('../pages/ContactsPage/ContactsPage'));

// export const App = () => {
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   return (
//     <Container>
//       <Title>Phonebook</Title>
//       {error && (
//           <p>Whoops, something went wrong: {error}</p>
//         )}
//       <ContactFrom />
//       <SubTitle>Contacts</SubTitle>
//       {contacts.length > 0 && <Filter />}
//       {!isLoading && <Loader />}
//       <ContactList />
//     </Container>
//   );
// };
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <div>
      <Suspense>
        <nav>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
          </Routes>
          </nav>
      </Suspense>
    </div>
  );
};