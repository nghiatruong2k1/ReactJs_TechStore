import { memo } from 'react';
import { Link } from '@mui/material/';
import { NavLink } from 'react-router-dom';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function LinkSetAction({ text, beforeText, afterText, to, ...props }) {
  return (
    <span>
      {beforeText && beforeText + ' '}
      <Link component={NavLink} underline="none" className={styles.link} to={to ?? '#'}>
        {text}
      </Link>
      {afterText && ' ' + afterText}
    </span>
  );
}
export default memo(LinkSetAction);
