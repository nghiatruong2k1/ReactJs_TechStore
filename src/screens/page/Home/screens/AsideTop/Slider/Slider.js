import { memo, useRef, useReducer } from 'react';
import { Grid, Box } from '@mui/material/';
import { initState, reducerState } from './init';
import Provider from './provider';
import {Slider} from '~/components';
function SliderComponent({ ...props }) {
  const [state, dispath] = useReducer(reducerState, initState);
  const thisRef = useRef(null);
  return (
    <>
      <Grid item p={0.5} {...props}>
        <Provider value={{ state, dispath, slider: thisRef.current }}>
          <Slider data={state.data} loading={state.isLoading} />
        </Provider>
      </Grid>
    </>
  );
}
export default memo(SliderComponent);
