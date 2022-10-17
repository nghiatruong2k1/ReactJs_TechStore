import { memo, useEffect, useReducer, useState } from 'react';
import { Box, Grid, Divider } from '@mui/material/';
import BrandServices from '~/services/brand';
import BrandsDescription from './Description';
import BrandsContent from './Content';
import { initState, reducerState } from './init';
import Provider from './provider';
import { useInitLoading } from '~/hooks/Loading';
function BrandsComponent() {
  const brandServices = BrandServices('home brands');
  const [state, dispath] = useReducer(reducerState, initState);
  const [loading, handleLoading] = useInitLoading();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Array(state.limit).fill(null));
    const ourLoading = handleLoading();
    const ourRequest = brandServices.getAll({}, (data) => {
      setData(data);
      ourLoading();
    });
    return ourRequest;
  }, [state.limit]);
  return (
    <Provider value={{ state, dispath, data, loading }}>
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
