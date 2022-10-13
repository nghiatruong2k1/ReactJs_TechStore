import { memo, useReducer } from 'react';
import { Box, Grid, Divider } from '@mui/material/';

import BrandsDescription from './Description';
import BrandsContent from "./Content";
import { initState, reducerState } from './init';
import Provider from './provider';
function BrandsComponent({ ...props }) {
  const [state, dispath] = useReducer(reducerState, initState);
  return (
    <Provider value={{ state, dispath }}>
      <Box>
        <Divider textAlign="left" component="h3">
          Thương hiêụ:
        </Divider>
        <Grid container>
          <BrandsDescription xs={12} md={4} lg={3} />
          <BrandsContent xs={12} md={8} lg={9} />
        </Grid>
      </Box>
    </Provider>
  );
}
export default memo(BrandsComponent);
