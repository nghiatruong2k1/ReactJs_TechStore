import { memo,  useReducer } from 'react';
import Provider from '../../provider';
import { Grid } from '@mui/material';
import { ViewContent } from '~/components';
import ViewItem from '../ViewItem';

function ViewListComponent({loading,data}) {
  return (
      <Grid container spacing={2}>
        <ViewContent loading={loading} length={data.length}>
          {Array.isArray(data) &&
            data.map((item, index)=>{
              return (
                <ViewItem
                  key={index}
                  loading={!Boolean(item) || loading}
                  {...item}
                />
              );
            })}
        </ViewContent>
      </Grid>
  );
}
export default memo(ViewListComponent);
