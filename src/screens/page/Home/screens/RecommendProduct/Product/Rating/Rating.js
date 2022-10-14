import { memo } from 'react';
import { Stack, Rating, Skeleton } from '@mui/material/';
function DataRating({ loading, rating }) {
  return (
    <Stack direction="row" alignItems="center" justifyContent={'center'}>
      {(loading && <Skeleton  />) || (
        <Rating
          value={(!loading && rating) || 0}
          readOnly
          size="small"
          precision={0.1}
          max={5}
          emptyIcon={<span className="fas fa-star" />}
        />
      )}
    </Stack>
  );
}
export default memo(DataRating);
