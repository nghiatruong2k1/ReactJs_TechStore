import {memo,useContext,useEffect,useState} from 'react';
import {TextField} from '@mui/material/';
import styles from './styles.module.css';
import {SearchContext} from "../provider";
function SearchInput({...props}){
  const {state,handle} = useContext(SearchContext)
  function handleChange(event){
    handle.set("query",event.target.value)
  }
  return(
    <TextField 
      className={styles.container} 
      required
      placeholder="Tìm kiếm..."
      InputProps={{
        disableUnderline:true,
        className:styles.content
      }}
      value={state.query ?? ""}
      onChange={handleChange}
      autoComplete="on"
      variant="standard"
      type="search"
    />
  )
}
export default memo(SearchInput);