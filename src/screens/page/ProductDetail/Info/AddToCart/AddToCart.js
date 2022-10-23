import { memo, useState, useCallback } from 'react';
import { LoadingButton } from '@mui/lab/';
import styles from '../Info.module.css';
import { useGetInfoContext } from '../provider';
import { Tooltip } from '@mui/material';
import { useGetCart } from '~/hooks/Cart';
import { Box } from '@mui/system';

const min = 1;
const max = 100;
function AddToCartButton({ loading,data,Quantity }) {
  const [isLoading, setLoading] = useState(false);
  const { dispath, initCase } = useGetCart();
  const handleClick = useCallback(() => {
    if(!isLoading){
      setLoading(true);
      dispath([
        initCase.ADD,
        {...data,Quantity},
        () => {
          setLoading(false);
        },
      ]);
    }
  }, [data,Quantity,isLoading,Quantity]);
  return (
    <Tooltip arrow title={`Số lượng từ ${min} đến ${max}`}>
      <span>
        <LoadingButton
          onClick={handleClick}
          disabled={
            isLoading ||
            loading ||
            !Boolean(Quantity >= min && Quantity <= max)
          }
          loading={isLoading}
          loadingPosition="start"
          className={styles.button}
          startIcon={<span className={'fa fa-shopping-cart'} />}
          variant="contained"
          color="warning"
        >
          <Box sx={{display:{xs:'none',lg:'inline'}}}>Thêm vào giỏ hàng</Box>
        </LoadingButton>
      </span>
    </Tooltip>
  );
}
export default memo(AddToCartButton);
