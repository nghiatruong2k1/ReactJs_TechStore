import { memo } from 'react';
import clsx from 'clsx';
import formatNumber from 'number-format.js';
import { Skeleton, Typography } from '@mui/material/';
import styles from '../Item.module.css';

function DataPrice({ text, loading, price, salePrice }) {
  let _className = '';
  let _priceText = salePrice;
  if (!loading) {
    if (price) {
      salePrice = Number(salePrice);
      if (salePrice > 0) {
        _className = styles.sale;
        _priceText = formatNumber('#,##0.# đ', salePrice);
      } else {
        _className = styles.hidden;
      }
    } else {
      _priceText = '';
      _className = styles.hidden;
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
