import { memo } from 'react';
import { Skeleton, Typography } from '@mui/material/';
import { Link } from 'react-router-dom';
import { routers, getAction } from '~/config/Router';
function NameName({ loading, alias, name}) {
  return (
    <Typography
      textAlign={'left'}
      component={(!loading && Link) || 'span'}
      to={getAction(routers.product.detail, { alias })}
    >
      {(loading && <Skeleton variant="text" className="skeleton" />) || name}
    </Typography>
  );
}
export default memo(NameName);
