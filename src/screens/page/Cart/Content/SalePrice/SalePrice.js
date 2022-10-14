import { memo } from 'react';
import clsx from 'clsx';
import formatNumber from 'number-format.js';
import { Skeleton } from '@mui/material/';
import styles from '../Content.module.css';

function DataPrice({ loading, price, salePrice }) {
  let _className = '';
  let _priceText = salePrice;
  if (!loading) {
    if (price) {
      salePrice = Number(salePrice);
      if (salePrice > 0) {
        _className = styles.sale;
        _priceText = formatNumber("#,##0.# đ",salePrice);
      } else {
        _className = styles.hidden;
      }
    } else {
      _priceText = '';
      _className = styles.hidden;
    }
  }
  return (
    <span className={clsx(styles.price, _className)}>
      {(loading && <Skeleton variant="text" className="skeleton" />) ||
        _priceText}
    </span>
  );
}
export default memo(DataPrice);
