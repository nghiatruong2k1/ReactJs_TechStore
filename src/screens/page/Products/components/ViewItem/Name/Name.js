import { memo } from 'react';
import { Skeleton, Typography } from '@mui/material/';

import { Link } from 'react-router-dom';
import styles from '../ViewItem.module.css';
import { ProductController } from '~/controllers';
function DataName({ loading, alias, name}) {
  return (
    <Typography
      component={(!loading && Link) || 'span'}
      className={styles.name}
     to={ProductController.detail.getAction({ alias })}
      align="center"
    >
      {(loading && <Skeleton />) || name}
    </Typography>
  );
}
export default memo(DataName);
