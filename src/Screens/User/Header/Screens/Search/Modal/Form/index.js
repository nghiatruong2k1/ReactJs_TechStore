import {memo,useContext} from 'react';
import {FormControl,FormGroup} from '@mui/material/';
import SearchSelect from "../../Select";
import SearchInput from "../../Input";
import SearchOption from "../../Option";

import {SearchContext} from "../../provider";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>{
  return {
    container:{
      color:`${theme.palette.text.paper} !important`,
      backgroundColor:`${theme.palette.background.paper} !important`
    }
  }}
);

function SearchForm({children,...props}){
    const {state,dispath,onSubmit} = useContext(SearchContext);
    return (
    <FormControl  
        component="form" 
        method="POST" 
        fullWidth
        onSubmit={onSubmit}
        {...props}
    >
        <FormGroup row 
            sx={{py:0.3,px:0.15,alignItems:'center'}}
        >
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
    )
};export default memo(SearchForm)