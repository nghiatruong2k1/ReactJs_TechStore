import { memo, Fragment, useReducer, useEffect } from 'react';
import clsx from 'clsx';
import { Card, CardContent, Grid, Stack } from '@mui/material';
import InfoName from './Name';
import InfoRating from './Rating';
import InfoPrice from './Price';
import InfoSalePrice from './SalePrice';
import InfoShortDes from './ShortDes';
import InfoQuantity from './Quantity';
import InfoContactButton from './Contact';
import AddToCartButton from './AddToCart';
import Provider from './provider';
import { initCase, initState, reducerState } from './init';
function InfoComponent({ data, loading, ...props }) {
  const [state, dispath] = useReducer(reducerState, initState);
  useEffect(() => {
    dispath([initCase.SET_QUANTITY, 1]);
  }, [data]);
  return (
    <Grid item {...props}>
      <Provider value={{state, dispath}}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <InfoName
              loading={loading}
              name={data && data.Name}
              alias={data && data.Alias}
            />
            <InfoRating loading={loading} rating={data.Rating} />
            <InfoPrice
              loading={loading}
              price={data && data.Price}
              salePrice={data && data.SalePrice}
            />
            <InfoSalePrice
              loading={loading}
              price={data && data.Price}
              salePrice={data && data.SalePrice}
            />
            <InfoShortDes loading={loading} shortDes={data.ShortDes} />
          </CardContent>
          <CardContent
            component={Stack}
            direction="row"
            spacing={3}
            alignItems="center"
          >
            <InfoQuantity loading={loading}/>
            <InfoContactButton loading={loading} />
            <AddToCartButton loading={loading} data={data} Quantity={state.quantity}/>
          </CardContent>
          <div></div>
        </Card>
      </Provider>
    </Grid>
  );
}
export default memo(InfoComponent);
