import { memo, Fragment, useReducer, useMemo } from 'react';
import clsx from 'clsx';
import Provider from './provider';
import { initState, reducerState } from './init';
import { ViewContent } from '~/components';
import { Grid } from '@mui/material';

import DetailInfo from './Info';
import DetailDescription from './Description';
import DetailPicture from './Picture';
function ProductDetailComponent(props) {
  const [state, dispath] = useReducer(reducerState, initState);
  const loading = useMemo(() => {
    return state.isLoading || !Boolean(state.data);
  }, [state.isLoading, state.data]);
  return (
    <Provider value={{ state, dispath }}>
      <ViewContent loading={state.isLoading} length={state.data.Id}>
        <Grid container py={2} spacing={2}>
          <DetailPicture loading={loading}
            id={state.data && state.data.Id} xs={12} sm={5} md={4}/>
          
          <DetailInfo
            data={state.data}
            loading={loading}
            xs={12}
            sm={7}
            md={8}
          />
          <DetailDescription
            loading={loading}
            fullDes={state.data && state.data.FullDes}
            xs={12}
          />
        </Grid>
      </ViewContent>
    </Provider>
  );
}
export default memo(ProductDetailComponent);
