import { memo, Fragment } from 'react';
import clsx from 'clsx';
import { Card, CardHeader, Typography } from '@mui/material';
import { Frame, Image } from '~/components';
import styles from './Item.module.css';
import ItemName from './Name';
import ItemPrice from './Price';
import ItemSalePrice from './SalePrice';
import RemoveButton from './Remove';
function CartItemComponent({ loading, ImageUrl, Name, Alias, Quantity ,Price,SalePrice,index}) {
  return (
    <Card>
      <CardHeader
        classes={{
          avatar: styles.avatar,
          action: styles.action,
        }}
        avatar={
          <Frame variant="square" loading={loading}>
            <Image fit={'contain'} src={ImageUrl} />
          </Frame>
        }
        title={<ItemName loading={loading} name={Name} alias={Alias} />}
        subheader={
          <>
            <Typography>{`Số lượng: ${Quantity ?? 0}`}</Typography>
            <ItemPrice text="Giá" price={Price} salePrice={SalePrice}/>
            <ItemSalePrice text="Giảm giá" price={Price} salePrice={SalePrice}/>
          </>
        }
        action={
            <RemoveButton loading={loading} index={index}/>
        }
        sx={{ p: 0.5 }}
      />
    </Card>
  );
}
export default memo(CartItemComponent);
