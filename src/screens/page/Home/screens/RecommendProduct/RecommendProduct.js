import { memo, useEffect, useReducer, useState } from 'react';
import { Box, Grid, Divider } from '@mui/material/';
import { ViewContent } from '~/components';
import { useInitLoading } from '~/hooks/Loading';
import ProductServices from '~/services/product';
import { initState, reducerState } from './init';
import Product from './Product';
function RecommendComponent() {
  const productServices = ProductServices('home recommend product');
  const [state, dispath] = useReducer(reducerState, initState);
  const [isLoading, handleLoading] = useInitLoading();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Array(state.limit).fill(null));
    const ourLoading = handleLoading();
    const ourRequest = productServices.getsRecommend(
      {
        limit: state.limit ?? 1,
        offset: 0,
      },
      (data) => {
        setData(data);
        ourLoading();
      },
    );
    return ourRequest;
  }, [state.limit]);
  return (
    <>
      <Box>
        <Divider textAlign="left" component="h3">
          Sản phẩm đề xuất:
        </Divider>
        <Grid container spacing={1}>
          <ViewContent loading={isLoading} length={data.length}>
            {data.map(function (item, index) {
              return (
                <Product
                  loading={isLoading || !Boolean(item)}
                  data={item}
                  key={index}
                />
              );
            })}
          </ViewContent>
        </Grid>
      </Box>
    </>
  );
}
export default memo(RecommendComponent);
