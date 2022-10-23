import { memo } from 'react';
import { Skeleton, Typography } from '@mui/material/';
import { Link } from 'react-router-dom';
import { routers, getAction } from '~/config/Router';
function NameName({ loading, alias, name}) {
  return (
    <Typography
      textAlign={'left'}
      component={(!loading && Link) || 'span'}
      to={routers.product.detail.getAction({ alias })}
    >
      {(loading && <Skeleton />) || name}
    </Typography>
  );
}
export default memo(NameName);
