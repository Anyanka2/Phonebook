import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';

const { useEffect } = require('react');
const { useDispatch } = require('react-redux');
const { getContactsThunk } = require('redux/contactsThunk');

export const Contacts = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getContactsThunk);
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <div>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
