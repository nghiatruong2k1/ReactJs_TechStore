import { memo, useCallback, useEffect, useReducer, useState } from 'react';

import { DialogContent, Grid, Paper } from '@mui/material';
import { useInitLoading } from '~/hooks/Loading';
import { ViewContent, Paging } from '~/components';
import ListHead from './Head';
import ListItem from './Item';
import styles from '../InputFile.module.css';
import Provider from './provider';
import { initCase, initState, reducerState } from './init';
import ImageAdminServices from '~/area/Admin/services/imageAdmin';
function ContentComponent({ onClose, value, onChange }) {
  const imageAdminServices = ImageAdminServices(ContentComponent);
  const [state, dispath] = useReducer(reducerState, initState);
  const [loading, handleLoading] = useInitLoading();
  const [data, setData] = useState(Array(initState.limit).fill(null));
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const ourLoading = handleLoading();
    const ourRequest = imageAdminServices.getCount(
      { IsTrash: false, IsPublic: true },
      (data) => {
        setTotal(data);
      },
      ourLoading,
    );
    return () => {
      ourRequest();
      dispath([initCase.SET_PAGE]);
    };
  }, []);
  useEffect(() => {
    const ourLoading = handleLoading();
    const ourRequest = imageAdminServices.getAll(
      {
        isTrash: false,
        isPublic: true,
        limit: state.limit,
        offset: (state.page - 1) * state.limit,
      },
      (data) => {
        setData(data);
      },
      ourLoading,
    );
    return () => {
      ourRequest();
      setData(Array(initState.limit).fill(null));
    };
  }, [state.page, state.limit]);
  const handlePageChange = useCallback((index) => {
    dispath([initCase.SET_PAGE, index]);
  }, []);
  return (
    <Provider value={{ onClose }}>
      <ListHead />
      <DialogContent sx={{ p: 1 }}>
        <Paper
          className={styles.content}
          sx={{ height: '100%', p: 1 }}
          variant="outlined"
        >
          <Grid container spacing={2}>
            <ViewContent loading={loading} length={total}>
              {data.map((item, index) => {
                const isActive = item?.Id == value;
                return (
                  <ListItem
                    key={index}
                    data={item}
                    active={isActive}
                    loading={loading || !Boolean(item)}
                    onClick={onChange}
                  />
                );
              })}
            </ViewContent>
          </Grid>
        </Paper>
      </DialogContent>
      <Paging
        total={total}
        limit={state.limit}
        page={state.page}
        onChange={handlePageChange}
      />
    </Provider>
  );
}
export default memo(ContentComponent);
