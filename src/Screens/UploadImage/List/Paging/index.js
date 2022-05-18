import {memo,useContext,useMemo,useEffect} from 'react';
import clsx from 'clsx';
import {
  Stack,Pagination,PaginationItem
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ListContext} from '../provider';
function ViewPaging({...props}){
  const {state,handle} = useContext(ListContext);
  const pageCount = useMemo(function(){
    return Math.ceil(state.total / state.view);
  },[state.total,state.view]);
  useEffect(function(){
    if(state.page > 1 && pageCount >= 1 && state.page > pageCount){
      handle.set("page",state.page - 1);
    }
  },[state.page,pageCount])
  function handleChange(event,index){
    handle.set("page",index)
  }
  if(pageCount > 1){
    return(
      <Stack spacing={2} className={styles.container}>
        <Pagination 
          onChange={handleChange} 
          count={pageCount} 
          page={state.page} 
        />
      </Stack>
    )
  }else{
    return <></>
  }
}
export default memo(ViewPaging);