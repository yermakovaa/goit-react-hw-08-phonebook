import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { variants } from '../../utils/motionVar';
import s from './HomeView.module.css';

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className={s.wrapper}>
      <AnimatePresence>
        <motion.h1
          className={s.title}
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
          variants={variants}
        >
          Welcome to our service. Now you will exactly not forget your contacts!{' '}
          <span role="img" aria-label="Welcome icon">
            💁‍♀️
          </span>
        </motion.h1>
      </AnimatePresence>
      {!isLoggedIn && (
        <AnimatePresence>
          <motion.p
            className={s.text}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
          >
            Please, <b>Sign up</b> or <b>Log in</b> to have access to the
            Phonebook!
          </motion.p>
        </AnimatePresence>
      )}
    </div>
  );
};

export default HomeView;
