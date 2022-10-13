import { memo, useReducer } from 'react';
import { Box, Grid, Divider } from '@mui/material/';

import { ViewContent } from '~/components';
import { initState, reducerState } from './init';
import Provider from './provider';
import Product from './Product';
function RecommendComponent() {
  const [state, dispath] = useReducer(reducerState, initState);
  return (
    <Provider value={{ state, dispath }}>
      <Box>
        <Divider textAlign="left" component="h3">
          Sản phẩm đề xuất:
        </Divider>
        <Grid container spacing={1}>
          <ViewContent loading={state.isLoading} length={state.data.length}>
            {state.data.map(function (data, index) {
              return (
                <Product
                  loading={state.isLoading || !Boolean(data)}
                  data={data}
                  key={index}
                />
              );
            })}
          </ViewContent>
        </Grid>
      </Box>
    </Provider>
  );
}
export default memo(RecommendComponent);
