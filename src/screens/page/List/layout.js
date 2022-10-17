import { memo,  useEffect } from 'react';
import { Grid } from '@mui/material';
import { useHandleTitle } from '~/hooks/Title';
import Provider from './provider';
import ViewList from './components/ViewList';
function LayoutComponent({ data,loading,state, title, controller }) {
  const handleTitle = useHandleTitle();
  useEffect(() => {
    return handleTitle(title);
  }, [title]);
  return (
    <Provider value={{ data,loading,state }}>
      <Grid container spacing={2}>
        <ViewList
          controller={controller}
          loading={loading || !Boolean(data)}
          state={state}
          data={data}
        />
      </Grid>
    </Provider>
  );
}
export default memo(LayoutComponent);
