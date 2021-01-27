import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ErrorView from '../../components/ErrorView';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import s from './ContactsView.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();
  const error = useSelector(contactsSelectors.getError);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      {!error && (
        <>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}

      {error && <ErrorView message={error} />}
    </div>
  );
}
