import { memo } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Divider,
} from '@mui/material/';
import { Frame, Image } from '~/components';
import ItemName from './Name';
import ItemPrice from './Price';
import ItemSalePrice from './SalePrice';
import ItemBookmask from './Bookmask';
import ItemRating from './Rating';
import ItemAddToCart from './AddToCart';
import styles from './ViewItem.module.css';
function ViewItem({
  Id,
  ImageUrl,
  Alias,
  Name,
  Rating,
  Price,
  SalePrice,
  ShortDes,
  loading,
}) {
  return (
    <Grid item xs={6} sm={4} xl={3}>
      <Card sx={{ height: '100%' }} className={styles.card}>
        <CardContent>
          <Frame variant="rectangle" loading={loading}>
            <ItemBookmask price={Price} salePrice={SalePrice} />
            <Image fit="contain" loading={loading} src={ImageUrl} />
          </Frame>
        </CardContent>
        <Divider />
        <CardContent sx={{textAlign:'center',flex:1}}>
          <ItemName loading={loading} name={Name} alias={Alias} />
          <ItemRating rating={Rating || 0} loading={loading} />
          <ItemSalePrice
            loading={loading}
            price={Price}
            salePrice={SalePrice}
          />
          <ItemPrice loading={loading} price={Price} salePrice={SalePrice} />
        </CardContent>
        <Divider />
        <CardContent sx={{textAlign:'center'}}>
            <ItemAddToCart loading={loading} Id={Id}/>
        </CardContent>
        <div></div>
      </Card>
    </Grid>
  );
}
export default memo(ViewItem);
