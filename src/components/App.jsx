import ContactList from './ContactList/ContactList';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { selectContactsArray } from 'redux/selectors';

const App = () => {
  const { items, isLoading, error } = useSelector(selectContactsArray);

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
      <h1>&#128222; Phonebook &#128218;</h1>
      <PhonebookForm />
      <h2>&#128104; Contacts &#128105;</h2>
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && !error && <ContactList />}
    </div>
  );
};

export default App;
