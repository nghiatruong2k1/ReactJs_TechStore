import { memo, Fragment, useEffect, useReducer } from 'react';

import { Grid } from '@mui/material';
import { useHandleTitle } from '~/hooks/Title';
import Provider from './provider';
import { initState, reducerState } from './init';
import ViewList from '../components/ViewList/ViewList';
function LayoutComponent({ handleGetData, title, controller }) {
  const [state, dispath] = useReducer(reducerState, initState);
  const handleTitle = useHandleTitle();
  useEffect(() => {
    return handleTitle(title);
  }, [title]);
  return (
    <Provider value={{ state, dispath, handleGetData, controller }}>
      <Grid container spacing={2} sx={{ py: 2 }}>
        <ViewList
          controller={controller}
          loading={state.isLoading || !Boolean(state.data)}
          data={state.data}
        />
      </Grid>
    </Provider>
  );
}
export default memo(LayoutComponent);
