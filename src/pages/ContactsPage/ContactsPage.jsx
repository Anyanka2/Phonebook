import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { MainContainer } from 'App/App.styled';

const { useEffect } = require('react');
const { useDispatch } = require('react-redux');
const { getContactsThunk } = require('redux/contactsThunk');

const Contacts = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getContactsThunk);
  }, [dispatch]);
  return (
    <MainContainer>
      <ContactForm />
      <div>
        <Filter />
        <ContactList />
      </div>
    </MainContainer>
  );
};
export default Contacts;
