import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.items);

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(filteredContacts);
    return filteredContacts;
  };

  return (
    <ol>
      {filterContact().map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <Contact name={name} number={number} id={id} />
          </li>
        );
      })}
    </ol>
  );
};

export default ContactList;
