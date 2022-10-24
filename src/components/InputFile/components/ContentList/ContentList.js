import { memo, Fragment } from 'react';
import clsx from 'clsx';
function ContentComponent(props) {
  return (
    <>
      {/* <ListHead /> */}
      <DialogContent sx={{ p: 1 }}>
        <Paper
          className={styles.content}
          sx={{ height: '100%', p: 1 }}
          variant="outlined"
        >
          {/* <ListView />
          <ListPaging /> */}
        </Paper>
      </DialogContent>
      {/* <ListFooter /> */}
    </>
  );
}
export default memo(ContentComponent);
