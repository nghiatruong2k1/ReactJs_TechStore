import { memo } from 'react';
import { Skeleton, Typography } from '@mui/material/';
import styles from '../Content.module.css';
import { Link } from 'react-router-dom';
import { publicRouters} from '~/routers/Public';
function DataName({ loading, alias, name}) {
  return (
    <Typography
      component={(!loading && alias && Link) || 'span'}
      className={styles.name}
      to={publicRouters.product.detail.getAction( { alias })}
      align="center"
    >
      {(loading && <Skeleton  />) || name || "Sản phẩm"}
    </Typography>
  );
}
export default memo(DataName);
