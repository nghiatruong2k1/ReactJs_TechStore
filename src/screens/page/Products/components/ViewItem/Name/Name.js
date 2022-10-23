import { memo } from 'react';
import { Skeleton, Typography } from '@mui/material/';

import { Link } from 'react-router-dom';
import { routers, getAction } from '~/config/Router';
import styles from '../ViewItem.module.css';
function DataName({ loading, alias, name}) {
  return (
    <Typography
      component={(!loading && Link) || 'span'}
      className={styles.name}
      to={routers.product.detail.getAction({ alias })}
      align="center"
    >
      {(loading && <Skeleton />) || name}
    </Typography>
  );
}
export default memo(DataName);
