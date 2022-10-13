import { memo, useState, useCallback } from 'react';
import { LoadingButton } from '@mui/lab/';
import styles from '../Info.module.css';
import { useGetInfoContext } from '../provider';
import { Tooltip } from '@mui/material';
import { useGetCart } from '~/hooks/Cart';

const min = 1;
const max = 100;
function AddToCartButton({ loading, ...props }) {
  const [isLoading, setLoading] = useState(false);
  const { state } = useGetInfoContext();
  const { dispath, initCase } = useGetCart();
  const handleClick = useCallback(() => {
    if(!isLoading){
      setLoading(true);
      dispath([
        initCase.ADD,
        state,
        () => {
          setLoading(false);
        },
      ]);
    }
  }, [state,isLoading]);
  return (
    <Tooltip arrow title={`Số lượng từ ${min} đến ${max}`}>
      <span>
        <LoadingButton
          onClick={handleClick}
          disabled={
            isLoading ||
            loading ||
            !Boolean(state.Quantity >= min && state.Quantity <= max)
          }
          loading={isLoading}
          loadingPosition="start"
          className={styles.button}
          startIcon={<span className={'fa fa-shopping-cart'} />}
          variant="contained"
          color="warning"
        >
          Thêm vào giỏ hàng
        </LoadingButton>
      </span>
    </Tooltip>
  );
}
export default memo(AddToCartButton);
