import { memo } from 'react';
import { Skeleton, Typography } from '@mui/material/';
import { Link } from 'react-router-dom';
import { ProductController } from '~/controllers';
function NameName({ loading, alias, name}) {
  return (
    <Typography
      textAlign={'left'}
      component={(!loading && Link) || 'span'}
     to={ProductController.detail.getAction({ alias })}
    >
      {(loading && <Skeleton />) || name}
    </Typography>
  );
}
export default memo(NameName);
