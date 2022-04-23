import {memo,useContext,useMemo,useEffect} from 'react';
import clsx from 'clsx';
import {
  Stack,Pagination
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ViewContext} from '../provider';
function ViewPaging({...props}){
  const {state,handle} = useContext(ViewContext);
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
        <Pagination onChange={handleChange} count={pageCount} page={state.page} />
      </Stack>
    )
  }else{
    return <></>
  }
}
export default memo(ViewPaging);