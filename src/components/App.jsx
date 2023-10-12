import ContactList from './ContactList/ContactList';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import Filter from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
// import Modal from './Modal/Modal';

import { useSelector } from 'react-redux';
//так як використовується redux-rersist, то useEffect не потрібен для зберігання в локал сторедж

const App = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '600px',
        marginTop: '50px',
        backgroundColor: '#58c800',
        borderRadius: '20px',
        padding: '40px 20px',
        outline: 'auto #280a0a00',
        outlineOffset: '-20px',
      }}
    >
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
