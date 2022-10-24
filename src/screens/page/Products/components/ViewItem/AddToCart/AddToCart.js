import { memo, useState, useCallback } from 'react';
import { LoadingButton } from '@mui/lab/';
import { useGetCart } from '~/hooks/Cart';
import { Box } from '@mui/material';

function AddToCartButton({ loading, data, ...props }) {
  const [isLoading, setLoading] = useState(false);
  const { dispath, initCase } = useGetCart();
  const handleClick = useCallback(() => {
    if (!isLoading) {
      setLoading(true);
      dispath([
        initCase.ADD,
        { ...data, Quantity: 1 },
        () => {
          setLoading(false);
        },
      ]);
    }
  }, [data, isLoading]);
  return (
    <>
      <span>
        <LoadingButton
          onClick={handleClick}
          disabled={isLoading || loading}
          loading={isLoading}
          loadingPosition="start"
          startIcon={<span className={'fa fa-shopping-cart'} />}
          variant="contained"
          color="warning"
        >
          <Box sx={{display:{xs:'none',lg:'inline'}}}>Thêm vào giỏ hàng</Box>
        </LoadingButton>
      </span>
    </>
  );
}
export default memo(AddToCartButton);
