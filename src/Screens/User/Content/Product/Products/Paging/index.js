import {memo,useContext} from 'react';
import clsx from 'clsx';
import {
  Stack,Pagination
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ProductsContext} from '../provider';
function ViewPaging({...props}){
  const {state,dispath} = useContext(ProductsContext);
  const pageCount = Math.ceil(state.total / state.limit);
  if(state.page > 1 && pageCount >= 1 && state.page > pageCount){
    dispath(["set_page",state.page - 1]);
  }
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