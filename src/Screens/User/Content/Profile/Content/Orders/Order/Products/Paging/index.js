import {memo,useContext,useMemo,useEffect} from 'react';
import clsx from 'clsx';
import {
  Stack,Pagination
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {OrderProductsContext} from '../provider';
function ViewPaging({...props}){
  const {state,dispath} = useContext(OrderProductsContext);
  const pageCount = useMemo(function(){
    return Math.ceil(state.total / state.limit);
  },[state.total,state.limit]);
  useEffect(function(){
    if(state.page > 1 && pageCount >= 1 && state.page > pageCount){
      dispath(["set_page",state.page - 1]);
    }
  },[state.page,pageCount])
  function handleChange(event,index){
    dispath(["set_page",index])
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