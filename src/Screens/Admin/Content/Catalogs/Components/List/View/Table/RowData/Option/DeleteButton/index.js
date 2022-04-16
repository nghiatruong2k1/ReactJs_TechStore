import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Tooltip,IconButton} from '@mui/material/';
import {DeleteForeverRounded} from '@mui/icons-material/';
import styles from './styles.module.css';

import {ListContext} from "../../../../../provider";
import {ViewContext} from "../../../../provider";
import {RowDataContext} from '../../provider';
import {NavLink} from "react-router-dom"

function DeleteButton({...props}){
  const {toast} = useContext(global.config.context);
  const {data} = useContext(RowDataContext);
  const {controller} = useContext(ListContext);
  const {state,handle} = useContext(ViewContext);
  const Fetch = global.config.useFetch();
  function deleteData(){
    Fetch.delete({
      api:"api/admin/"+controller+"/"+data.Id
      ,onEnd:function(){
        handle.refetch();
      }
    })    
  }
  if(state.inTrash){
    return(
      <Tooltip 
        title={"Xóa"} 
        placement="top"
      >
        <IconButton 
          variant="outlined"
            className={clsx(styles.option)}
            onClick={()=>{deleteData()}}
        >
             <DeleteForeverRounded />
        </IconButton>
      </Tooltip>
    )
  }else{
    return <></>
  }
}
export default memo(DeleteButton);