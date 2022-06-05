import {memo,useContext,useMemo,useEffect} from 'react';
import {
  Stack,Pagination
} from '@mui/material/';
import {ListContext} from '../provider';
function ViewPaging({...props}){
  const {state,handle} = useContext(ListContext);
  const pageCount = useMemo(function(){
    return Math.ceil(state.total / state.limit);
  },[state.total,state.limit]);
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
      <Stack spacing={2} sx={{py:1}}>
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