import { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, Typography } from '@mui/material';
import styles from './Content.module.css';
import { Frame, Image } from '~/components';

import DataName from './Name';
import DataPrice from './Price';
import DataSalePrice from './SalePrice';
import DataRemove from './Remove';
function ContentRowComponent({
  image,
  name,
  alias,
  price,
  salePrice,
  quantity,
  title,
  loading,
  index
}) {
  return (
    <Grid container className={clsx(styles.row, { [styles.title]: title })}>
      <Grid item xs={2} className={styles.cell}>
        {(title && <Typography>{image}</Typography>) || (
          <Frame variant={'square'} loading={loading}>
            <Image fit="cover" src={image} alt={name} loading={loading} />
          </Frame>
        )}
      </Grid>
      <Grid item xs={3} className={styles.cell}>
        {(title && <Typography>{name}</Typography>) || (
          <DataName loading={loading} name={name} alias={alias} />
        )}
      </Grid>
      <Grid item xs={2.5} className={styles.cell}>
        {(title && <Typography>{price}</Typography>) || (
          <>
            <DataPrice loading={loading} price={price} salePrice={salePrice} />
            <DataSalePrice
              loading={loading}
              price={price}
              salePrice={salePrice}
            />
          </>
        )}
      </Grid>
      <Grid item xs={2.5} className={styles.cell}>
        <Typography>{quantity}</Typography>
      </Grid>
      <Grid item xs={2} className={styles.cell}>
        {
            !title && (<DataRemove index={index} loading={loading}/>)
        }
      </Grid>
    </Grid>
  );
}
ContentRowComponent.defaultProps = {
  title: false,
};
ContentRowComponent.propTypes = {
  title: PropTypes.bool,
};
export default memo(ContentRowComponent);
