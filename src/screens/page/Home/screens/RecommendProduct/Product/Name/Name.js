import { memo } from 'react';
import clsx from 'clsx';
import { Skeleton, Typography } from '@mui/material/';
import styles from '../Product.module.css';
import { Link } from 'react-router-dom';
import { publicRouters } from '~/routers/Public';
function DataName({ loading, alias, name}) {
  return (
    <Typography
      component={(!loading && Link) || 'span'}
      className={styles.name}
      to={publicRouters.product.detail.getAction({ alias })}
      align="center"
    >
      {(loading && <Skeleton  />) || name}
    </Typography>
  );
}
export default memo(DataName);
