import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LinkTo.module.css';
function LinkSetAction({ text, beforeText, afterText, to }) {
  return (
    <span>
      {beforeText}
      <NavLink className={styles.link} to={to ?? '/404'}>
        {` ${text} `}
      </NavLink>
      {afterText}
    </span>
  );
}
export default memo(LinkSetAction);
