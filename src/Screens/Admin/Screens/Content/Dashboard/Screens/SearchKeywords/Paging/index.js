import {memo,useContext} from 'react';
import clsx from 'clsx';
import {
  Stack,Pagination
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {SearchKeywordsContext} from '../provider';
function SearchKeywordsPaging({...props}){
  const {data,page,view} = useContext(SearchKeywordsContext);
  const pageCount = Math.ceil(data.values.length / view.get);
  function handleChange(event,index){
    page.set(index)
  }
  if(pageCount > 0){
    return(
      <Stack spacing={2} className={styles.container}>
        <Pagination onChange={handleChange} count={pageCount} page={page.get} />
      </Stack>
    )
  }else{
    return <></>
  }
}
export default memo(SearchKeywordsPaging);