import {memo,Fragment} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';
import {FormControl,FormGroup} from '@mui/material/';
import {getRoute} from "../../../../../../Config/Route/";
function SearchForm({children,state,dispath,...props}){
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
    return (
        <FormControl 
            onSubmit={handleSubmit} 
            component="form" 
            method="POST" 
            fullWidth
            className={styles.form}
            sx={{py:0.3,px:0.15,display:{xs:'none',md:'block'}}}
        >
            <FormGroup row sx={{alignItems:'center'}}>
            {children}
            </FormGroup>
        </FormControl>
    )
};export default memo(SearchForm)