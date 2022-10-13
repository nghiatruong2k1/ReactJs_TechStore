import { memo } from 'react';
import clsx from 'clsx';
import formatNumber from 'number-format.js';
import { Skeleton } from '@mui/material/';
import styles from '../Info.module.css';

function InfoSalePrice({ loading, price, salePrice }) {
  let _className = '';
  let _priceText = '';
  if (!loading) {
    if (price) {
      if (salePrice) {
        _className = styles.sale;
        _priceText = formatNumber("#,###.# đ",salePrice);
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
      {(loading && <Skeleton variant="text" width='5em' className="skeleton" />) ||
        _priceText}
    </span>
  );
}
export default memo(InfoSalePrice);
