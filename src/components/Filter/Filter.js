import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '../../utils/motionVar';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);

  return (
    <>
      {contacts.length > 0 && (
        <AnimatePresence>
          <label className={s.label}>
            <motion.input
              initial="initial"
              animate="animate"
              exit="exit"
              transition="transition"
              variants={variants}
              className={s.input}
              type="text"
              value={filter}
              onChange={e =>
                dispatch(contactsActions.filterContact(e.target.value))
              }
            />
          </label>
        </AnimatePresence>
      )}
    </>
  );
}

export default Filter;
