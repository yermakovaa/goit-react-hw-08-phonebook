import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../img/avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <img
        src={defaultAvatar}
        alt="Default Avatar"
        width="32"
        className={s.avatar}
      />
      <span className={s.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogOut}>
        Log out
      </button>
    </div>
  );
}
