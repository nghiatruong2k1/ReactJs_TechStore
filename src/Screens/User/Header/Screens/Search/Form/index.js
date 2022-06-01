import {memo,Fragment,useContext} from 'react';
import {FormControl,FormGroup} from '@mui/material/';
import SearchSelect from "../Select";
import SearchInput from "../Input";
import SearchOption from "../Option";

import {SearchContext} from "../provider";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>{
  return {
    form:{
      color:`${theme.palette.text.default} !important`,
      backgroundColor:`${theme.palette.background.default} !important`,
      borderColor:`var(--info)`
    }
  }}
);

function SearchForm({children,...props}){
    const {state,dispath,onSubmit} = useContext(SearchContext);
    const styles = useStyles();
    return (
        <FormControl  
            component="form" 
            method="POST" 
            fullWidth
            autoComplete='on'
            onSubmit={onSubmit}
            {...props}
        >
            <FormGroup row 
                className={styles.form}
                sx={{py:0.4,px:0.15,alignItems:'center'
                    ,borderRadius:1.5,borderWidth:0.25,borderStyle:"solid"
                }}
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