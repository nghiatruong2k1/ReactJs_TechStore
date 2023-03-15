import { memo } from 'react';
import clsx from 'clsx';
import { Skeleton, Typography } from '@mui/material/';
import styles from '../Info.module.css';
import { Link } from 'react-router-dom';
import { ProductController } from '~/controllers';
function InfoName({ loading, alias, name}) {
  return (
    <Typography
      component={(!loading && Link) || 'span'}
      className={styles.name}
     to={ProductController.detail.getAction({ alias })}
    >
      {(loading && <Skeleton variant="text" className="skeleton" />) || name}
    </Typography>
  );
}
export default memo(InfoName);
