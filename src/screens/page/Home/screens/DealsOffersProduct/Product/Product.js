import { memo } from 'react';
import { Box, Divider, Card, CardActions, CardContent } from '@mui/material/';
import { Frame, Image } from '~/components';
import DataName from './Name';
import DataBookmask from './Bookmask';
import DataRating from './Rating';
import styles from './Product.module.css';
function Product({ data, loading, ...props }) {
  return (
    <Box px={0.5} py={1} sx={{ cursor: 'grab' }}>
      <Card className={styles.card}>
        <CardActions>
          <Frame variant="rectangle" loading={loading}>
            <DataBookmask
              price={data && data.Price}
              salePrice={data && data.SalePrice}
            />
            <Image fit="contain" src={data && data.ImageUrl} />
          </Frame>
        </CardActions>
        <Divider />
        <CardContent align="center">
          <DataName
            loading={loading}
            name={data && data.Name}
            alias={data && data.Alias}
          />
          <DataRating rating={(data && data.Rating) || 0} loading={loading} />
        </CardContent>
      </Card>
    </Box>
  );
}
export default memo(Product);
