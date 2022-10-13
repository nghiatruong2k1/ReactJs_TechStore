import { memo } from 'react';
import clsx from 'clsx';
import { Badge } from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from '../Product.module.css';
function Bookmask({ price, salePrice }) {
  let _saleText = 0;
  if (salePrice && salePrice > 0 && price && price > 0) {
    _saleText = Math.ceil(100 - (salePrice * 100) / price);
  }
  if (_saleText > 0) {
    return (
      <Badge
        className={styles.bookmask}
        componentsProps={{
          badge: {
            className: styles.badge,
          },
        }}
        badgeContent={`Giảm giá ${_saleText}%`}
      />
    );
  } else {
    return <></>;
  }
}
export default memo(Bookmask);
