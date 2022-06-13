import {memo,useReducer,useMemo} from 'react';
import {Grid,useMediaQuery} from '@mui/material/';

import {initData,reducer} from "./init";
import Provider from "./provider";

import SearchForm from "./Form/";
import SearchModal from "./Modal/";


function HeaderSearch({fixed,...props}){
  const [state,dispath] = useReducer(reducer,initData);
  const isMd = useMediaQuery((theme)=>(theme.breakpoints.down("md")));
  return(
  <Provider state={state} dispath={dispath}>
    <Grid item {...props}>
      <Grid container>
        {
          isMd && (<SearchModal />)
          ||<SearchForm />
        }
      </Grid>
    </Grid>
  </Provider>
  )
}
export default memo(HeaderSearch);