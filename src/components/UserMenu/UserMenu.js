import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '@material-ui/core/Button';
import defaultAvatar from '../../img/avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <img
        src={defaultAvatar}
        alt="Default Avatar"
        width="32"
        className={s.avatar}
      />
      <span className={s.name}>Welcome, {name}</span>
      <Button
        color="secondary"
        variant="outlined"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
}
