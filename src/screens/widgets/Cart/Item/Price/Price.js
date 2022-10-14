import { memo } from 'react';
import clsx from 'clsx';
import formatNumber from 'number-format.js';
import { Skeleton, Typography } from '@mui/material/';
import styles from '../Item.module.css';
function DataPrice({ text, loading, price, salePrice }) {
  let _className = '';
  let _priceText = price;
  if (!loading) {
    if (price) {
      if (salePrice) {
        _className = styles.old;
      } else {
        _className = styles.current;
      }
      price = Number(price);
      if (price > 0) {
        _priceText = formatNumber('#,##0.# đ', price);
      }
    } else {
      _priceText = 'Liên hệ';
      _className = styles.current;
    }
  }
  return (
    <Typography className={clsx(styles.price)}>
      {(loading && <Skeleton variant="text" className="skeleton" />) || (
        <>
          {`${text}: `}
          <span className={_className}>{_priceText}</span>
        </>
      )}
    </Typography>
  );
}
export default memo(DataPrice);
