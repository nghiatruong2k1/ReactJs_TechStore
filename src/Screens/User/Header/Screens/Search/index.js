import {memo,useReducer,useMemo} from 'react';
import {Grid,Stack,FormControl,FormGroup,useMediaQuery} from '@mui/material/';
import styles from './styles.module.css';

import {initData,reducer} from "./init";
import Provider from "./provider";

import SearchForm from "./Form/";
import SearchInput from "./Input/";
import SearchSelect from "./Select/";
import SearchOption from "./Option/";
import SearchToggle from "./Toggle/";



function HeaderSearch({fixed,...props}){
  const [state,dispath] = useReducer(reducer,initData);
  const isMd = useMediaQuery((theme)=>(theme.breakpoints.down("md")));
  const isFixed = useMemo(function(){
    return fixed || isMd
  },[fixed,isMd])

  return(
  <Provider state={state} dispath={dispath}>
    <Grid item {...props}>
      <Grid container>
        <SearchForm state={state} dispath={dispath}>
              <SearchSelect 
                value={state.controller}
                onChange={(e,v)=>{dispath(['set_controller',v])}}
              />
              <SearchInput      
                value={state.query ?? ""}
                onChange={(e,v)=>{dispath(['set_query',v])}}
              />
              <SearchOption />
        </SearchForm>
        {isMd && <SearchToggle /> }
      </Grid>
    </Grid>
  </Provider>
  )
}
export default memo(HeaderSearch);