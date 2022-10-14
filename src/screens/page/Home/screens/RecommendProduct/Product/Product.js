import { memo} from 'react';
import {
  Grid,
  Divider,
  Card,
  CardActions,
  CardContent,
} from '@mui/material/';
import { Frame, Image } from '~/components';

import DataName from './Name';
import DataPrice from './Price';
import DataSalePrice from './SalePrice';
import DataBookmask from './Bookmask';
import DataRating from './Rating';
import styles from './Product.module.css';
function ProductComponent({ data, loading, ...props }) {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
      <Card className={styles.card}>
        <CardActions>
          <Frame variant="rectangle" loading={loading}>
            <DataBookmask
              price={data && data.Price}
              salePrice={data && data.SalePrice}
            />
            <Image
              fit="contain"
              loading={loading}
              src={data && data.ImageUrl}
            />
          </Frame>
        </CardActions>
        <Divider />
        <CardContent align="center">
          <DataName
            loading={loading}
            name={data && data.Name}
            alias={data && data.Alias}
          />
          <DataRating loading={loading} rating={data && data.Rating}/>
          <DataPrice
            loading={loading}
            price={data && data.Price}
            salePrice={data && data.SalePrice}
          />
          <DataSalePrice
            loading={loading}
            price={data && data.Price}
            salePrice={data && data.SalePrice}
          />
        </CardContent>
      </Card>
    </Grid>
  );
}
export default memo(ProductComponent);
