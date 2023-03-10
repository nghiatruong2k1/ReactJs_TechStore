import { memo } from 'react';
import clsx from 'clsx';
import { Skeleton, Typography } from '@mui/material/';
import { Link } from 'react-router-dom';
import { publicRouters} from '~/routers/Public';
function ItemName({ loading, alias, name}) {
  return (
    <Typography
      component={(!loading && Link) || 'span'}
      to={publicRouters.product.detail.getAction({ alias })}
      align="center"
    >
      {(loading && <Skeleton variant="text" className="skeleton" />) || name}
    </Typography>
  );
}
export default memo(ItemName);
