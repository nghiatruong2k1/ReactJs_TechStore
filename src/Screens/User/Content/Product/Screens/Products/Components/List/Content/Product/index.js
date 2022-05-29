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
  Typography,
  Chip
} from '@mui/material/';
import {
  Star
} from '@mui/icons-material/';
import {Frame,Image} from "../../../../../../../../../../Components/";
import styles from "./styles.module.css";

import DataName from "./Name";
import DataShortDes from "./ShortDes";
import DataPrice from "./Price";
import DataSalePrice from "./SalePrice";
import DataBookmask from "./Bookmask";
import DataAddToCart from "./AddToCart";
import DataContact from "./Contact";
function ViewData({data,loading,...props}){
  return(
  <Stack py={1}>
      <Card>
        <Grid container>
          <Grid item xs={3}>
            <CardActions component={Box} px={2} disableSpacing>
              <Frame square loading={loading}>
                <DataBookmask price={data && data.Price} salePrice={data && data.SalePrice}/>
                <Image contain src={data && data.ImageUrl}/>
              </Frame>
            </CardActions>
          </Grid>
          <Grid item xs={6}>
              <CardContent className={styles.content} height="100%" component={Box} px={1} py={1}>
                <DataName loading={loading} name={data && data.Name} alias={data && data.Alias}/>
                <Rating
                  value={data && data.Rating || 0}
                  readOnly
                  size="small"
                  precision={0.1}
                  max={5}
                  emptyIcon={<Star />}
                />
                <Stack direction="row" spacing={1}>
                  <Chip size="small"icon={<i className="fas fa-check-circle"></i>} label="Còn hàng" variant="outlined" />
                  <Chip size="small"icon={<i className="fas fa-shopping-cart"></i>} label="Lượt mua" variant="outlined" />
                  <Chip size="small"icon={<i className="fas fa-eye"></i>} label="Lượt xem" variant="outlined" />
                </Stack>
                <DataShortDes loading={loading} shortDes={data && data.ShortDes}/>
            </CardContent>
          </Grid>
          <Grid item xs={3}>
            <CardContent component={Box} height="100%" align="center" px={1} py={1}>
              <Stack spacing={1}>
                <DataSalePrice loading={loading} price={data && data.Price} salePrice={data && data.SalePrice}/>
                <DataPrice loading={loading} price={data && data.Price} salePrice={data && data.SalePrice}/>
                <DataAddToCart loading={loading} data={data || {}}/>
                <DataContact loading={loading} data={data || {}}/>
              </Stack>
            </CardContent>
          </Grid>
        </Grid>
       </Card>
    </Stack>
  )
}
export default memo(ViewData);
                    