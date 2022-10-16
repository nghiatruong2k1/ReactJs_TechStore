import { memo } from 'react';
import { Grid } from '@mui/material/';

import PostCard from './Post/Post';
import { AccorCard } from '~/components';

function NoteList({ ...props }) {
  return (
    <AccorCard title="Ghi chú" open={true} {...props}>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {[1, 2, 3].map((data, index)=>{
          return <PostCard xs={12} md={6} lg={4} xxl={3} key={index} />;
        })}
      </Grid>
    </AccorCard>
  );
}
export default memo(NoteList);
