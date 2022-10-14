import { memo } from 'react';
import { Card, CardContent } from '@mui/material';
import ContentRow from './ContentRow';
import { ViewContent } from '~/components';
function ContentComponent({ data, loading }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <ViewContent
          loading={loading}
          length={data?.length}
          empty={'Giỏ hàng trống'}
        >
          <ContentRow
            name={'Sản phẩm'}
            price={'Giá'}
            quantity={'Số lượng'}
            title={true}
          />
          {Array.isArray(data) &&
            data.map((item, index) => {
              if (item) {
                return (
                  <ContentRow
                    key={index}
                    image={item.ImageUrl}
                    name={item.Name}
                    price={item.Price}
                    salePrice={item.SalePrice}
                    quantity={item.Quantity}
                    index={index}
                  />
                );
              } else {
                return <></>;
              }
            })}
        </ViewContent>
      </CardContent>
      <div></div>
    </Card>
  );
}
export default memo(ContentComponent);
