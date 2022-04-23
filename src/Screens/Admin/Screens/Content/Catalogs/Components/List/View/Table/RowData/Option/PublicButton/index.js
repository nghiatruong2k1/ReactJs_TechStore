import {memo,useContext,useState} from 'react';
import clsx from 'clsx';
import {
  Tooltip,IconButton
} from '@mui/material/';
import {
  Visibility,VisibilityOff
} from '@mui/icons-material/';
import {ListContext} from "../../../../../provider";
import {ViewContext} from "../../../../provider";
import {RowDataContext} from '../../provider';
import styles from './styles.module.css';
function PublicButton({...props}){
  const {toast} = useContext(global.config.context);
  const [isLoading,setLoading] = useState(false);
  const {data,loading} = useContext(RowDataContext);
  const {controller} = useContext(ListContext);
  const {state,handle} = useContext(ViewContext);
  const Fetch = global.config.useFetch();
  function putPublic(){
    Fetch.put({
      api:"api/admin/"+controller
      ,params:{
          ...data,
          IsPublic:!data.IsPublic
      },onStart:function(){
        setLoading(true)
      },onEnd:function(){
        handle.refetch();
        setLoading(false)
      }
    })    
  }
  return(
    <Tooltip 
      title={data.IsPublic && "Công khai" || "Riêng tư"} 
      placement="top"
    >
      <span>
        <IconButton 
          variant="outlined"
          disabled={loading || isLoading}
          className={clsx(styles.option)}
          onClick={()=>{putPublic()}}
        >
            {data.IsPublic && <Visibility /> || <VisibilityOff />}
        </IconButton>
      </span>
    </Tooltip>
  )
}
export default memo(PublicButton);