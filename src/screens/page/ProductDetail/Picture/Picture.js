import { memo, Fragment, useReducer } from 'react';
import clsx from 'clsx';
import { Card, CardContent, Grid } from '@mui/material';
import Provider from './provider';
import { initState, reducerState } from './init';
import Slider from '~/components/Slider';
function PictureComponent({ id, loading, ...props }) {
  const [state, dispath] = useReducer(reducerState, initState);
  return (
    <Grid item {...props}>
      <Card sx={{ height: '100%' }}>
        <CardContent sx={{ position: 'relative' }}>
          <Provider value={{state, dispath}} id={id}>
            <Slider data={state.data} loading={state.isLoading} fit='contain' variant='square'/>
          </Provider>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default memo(PictureComponent);
