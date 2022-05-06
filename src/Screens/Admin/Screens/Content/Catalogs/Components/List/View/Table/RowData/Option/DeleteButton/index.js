import {memo,useContext,useState} from 'react';
import clsx from 'clsx';
import {Tooltip,IconButton} from '@mui/material/';
import {DeleteForeverRounded} from '@mui/icons-material/';
import styles from './styles.module.css';

import {ListContext} from "../../../../../provider";
import {ViewContext} from "../../../../provider";
import {RowDataContext} from '../../provider';
import {NavLink} from "react-router-dom"
import { useFetch } from '../../../../../../../../../../../../Config/Fetch/';
function DeleteButton({...props}){
  const {toast} = useContext(global.config.context);
  const {data,loading} = useContext(RowDataContext);
  const [isLoading,setLoading] = useState(false);
  const {controller} = useContext(ListContext);
  const {state,handle} = useContext(ViewContext);
  const Fetch = useFetch();
  function deleteData(){
    Fetch.delete({
      api:"api/admin/"+controller+"/"+data.Id
      ,onStart:function(){
        setLoading(true)
      },onEnd:function(){
        handle.refetch();
        setLoading(false)
      }
    })    
  }
  if(state.inTrash){
    return(
      <Tooltip 
        title={"Xóa"} 
        placement="top"
      >
        <span>
          <IconButton 
            variant="outlined"
            disabled={loading || isLoading}
            className={clsx(styles.option)}
            onClick={()=>{deleteData()}}
          >
               <DeleteForeverRounded />
          </IconButton>
        </span>
      </Tooltip>
    )
  }else{
    return <></>
  }
}
export default memo(DeleteButton);