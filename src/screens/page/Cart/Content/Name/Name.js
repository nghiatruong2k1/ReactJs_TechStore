import { memo } from 'react';
import { Skeleton, Typography } from '@mui/material/';
import styles from '../Content.module.css';
import { Link } from 'react-router-dom';
import { routers, getAction } from '~/config/Router';
function DataName({ loading, alias, name}) {
  return (
    <Typography
      component={(!loading && alias && Link) || 'span'}
      className={styles.name}
      to={getAction(routers.product.detail, { alias })}
      align="center"
    >
      {(loading && <Skeleton variant="text" className="skeleton" />) || name || "Sản phẩm"}
    </Typography>
  );
}
export default memo(DataName);
