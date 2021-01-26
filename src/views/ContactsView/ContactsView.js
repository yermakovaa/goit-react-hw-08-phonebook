import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container';
import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
