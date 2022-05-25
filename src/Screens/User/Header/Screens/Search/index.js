import {memo,useReducer} from 'react';
import {Grid,Stack,FormControl,FormGroup} from '@mui/material/';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

import {initData,reducer} from "./init";
import Provider from "./provider";

import SearchInput from "./Input/";
import SearchSelect from "./Select/";
import SearchOption from "./Option/";
import SearchToggle from "./Toggle/";

import {getRoute} from "../../../../../Config/Route/";

function HeaderSearch({fixed,...props}){
  const [state,dispath] = useReducer(reducer,initData);
  const navigator = useNavigate();
  function handleSubmit(event){
      event.preventDefault();
      if(state.query.trim() != ""){
        dispath(['set_query',""])
        navigator({
          pathname:getRoute("user",state.controller,"search",{query:state.query}),
          search: ""
        });
      }
  }
  return(
  <Provider state={state} dispath={dispath}>
    <Grid item {...props}>
      <Grid container>
        <FormControl 
            onSubmit={handleSubmit} 
            component="form" 
            method="POST" 
            fullWidth
            className={styles.form}
            sx={{py:0.3,px:0.15,display:{xs:'none',lg:'block'}}}
          >
            <FormGroup row sx={{alignItems:'center'}}>
              <SearchSelect 
                value={state.controller}
                onChange={(e,v)=>{dispath(['set_controller',v])}}
              />
              <SearchInput      
                value={state.query ?? ""}
                onChange={(e,v)=>{dispath(['set_query',v])}}
              />
              <SearchOption />
            </FormGroup>
        </FormControl>
        {/* fixed && <SearchToggle /> */}
      </Grid>
    </Grid>
  </Provider>
  )
}
export default memo(HeaderSearch);