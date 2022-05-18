import {memo,useContext,useMemo,useEffect} from 'react';
import clsx from 'clsx';
import {
  Stack,Pagination
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DataContext} from '../provider';
function ViewPaging({...props}){
  const {state,handle} = useContext(DataContext);
  const pageCount = useMemo(function(){
    return Math.ceil(state.total / state.limit);
  },[state.total,state.limit]);
  useEffect(function(){
    if(state.page > 1 && pageCount >= 1 && state.page > pageCount){
      handle.setPage(state.page - 1);
    }
  },[state.page,pageCount])
  function handleChange(event,index){
    handle.setPage(index)
  }
  if(pageCount > 1){
    return(
      <Stack spacing={2} className={styles.container}>
        <Pagination onChange={handleChange} count={pageCount} page={state.page} />
      </Stack>
    )
  }else{
    return <></>
  }
}
export default memo(ViewPaging);