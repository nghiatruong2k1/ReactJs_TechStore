import {memo,useContext} from 'react';
import {
  Stack,
  Grid,
  Box,
  Divider,
  Card,
  CardActions,
  CardContent,
  Rating,
  Chip
} from '@mui/material/';
import {
  Star
} from '@mui/icons-material/';
import {Frame,Image} from "../../../../../../../../../../Components/";
import styles from "./styles.module.css";

import DataName from "./Name";
import DataPrice from "./Price";
import DataSalePrice from "./SalePrice";
import DataBookmask from "./Bookmask";
import DataAddToCart from "./AddToCart";
import DataContact from "./Contact";
function Product({data,loading,...props}){
  return(
    <Grid item xs={6} sm={4} md={3}>
      <Card className={styles.card}>
        <CardActions component={Box} px={2} disableSpacing>
            <Frame square px={3} loading={loading}>
              <DataBookmask price={data && data.Price} salePrice={data && data.SalePrice}/>
              <Image contain src={data && data.ImageUrl}/>
            </Frame>
         </CardActions>
         <CardContent className={styles.content} component={Box} px={1} py={1}>
                <DataName loading={loading} name={data && data.Name} alias={data && data.Alias}/>
                <Rating
                  value={data && data.Rating || 0}
                  readOnly
                  size="small"
                  precision={0.1}
                  max={5}
                  emptyIcon={<Star />}
                />
                <DataSalePrice loading={loading} price={data && data.Price} salePrice={data && data.SalePrice}/>
                <DataPrice loading={loading} price={data && data.Price} salePrice={data && data.SalePrice}/>
          </CardContent>
          <Divider />
          <CardContent component={Box} px={1} py={1}>
            <Stack direction={"row"} sx={{flexWrap:"wrap"}}>
              <Chip size="small" icon={<i className="fas fa-check-circle"></i>} label="Còn hàng" variant="outlined" />
              <Chip size="small" icon={<i className="fas fa-shopping-cart"></i>} label="Lượt mua" variant="outlined" />
              <Chip size="small" icon={<i className="fas fa-eye"></i>} label="Lượt xem" variant="outlined" />
             </Stack>
            <Stack spacing={1} align="center">
              <DataAddToCart loading={loading} data={data || {}}/>
              <DataContact loading={loading} data={data || {}}/>
            </Stack>
          </CardContent>
       </Card>
    </Grid>
  )
}
export default memo(Product);
                    