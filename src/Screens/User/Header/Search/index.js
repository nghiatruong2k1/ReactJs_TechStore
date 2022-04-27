import {memo,useReducer} from 'react';
import {Grid,Stack,FormControl} from '@mui/material/';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

import {initData,reducer} from "./init";
import Provider from "./provider";
import SearchSelect from "./Select/";
import SearchInput from "./Input/";
import SearchOption from "./Option/";
function HeaderSearch({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  const {getRoute} = global.config.useRoute();
  const navigator = useNavigate();
  function handleSubmit(event){
      event.preventDefault();
      if(state.query.trim() != ""){
        navigator({
          pathname:`${getRoute("user",state.controller,"search")}/${state.query}`,
          search: ""
        });
      }
  }
  return(
  <Provider state={state} dispath={dispath}>
    <Grid item {...props}>
      <FormControl data-controller={state.controller} onSubmit={handleSubmit} component="form"method="POST"className={styles.form}>
        <Stack direction="row" spacing={0} className={styles.group}>
          <SearchSelect />
          <SearchInput />
          <SearchOption />
        </Stack>
      </FormControl>
    </Grid>
  </Provider>
  )
}
export default memo(HeaderSearch);