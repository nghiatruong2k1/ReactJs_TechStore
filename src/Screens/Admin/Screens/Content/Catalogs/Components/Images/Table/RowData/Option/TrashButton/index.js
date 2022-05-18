import {memo,useContext,useState} from 'react';
import clsx from 'clsx';
import {Tooltip,IconButton} from '@mui/material/';
import {RestoreFromTrash,DeleteForeverRounded} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ViewContext} from "../../../../provider";
import {RowDataContext} from '../../provider';
import { useFetch } from '../../../../../../../../../../../Config/Fetch/';
function TrashButton({...props}){
  const {toast} = useContext(global.config.context);
  const {data,loading} = useContext(RowDataContext);
  const [isLoading,setLoading] = useState(false);
  const {state,handle,controller} = useContext(ViewContext);
  const Fetch = useFetch();
  function putTrash(){
    const newTrash = !data.IsTrash;
    Fetch.put({
      api:"api/admin/"+controller
      ,params:{
          ...data,
          IsTrash:newTrash
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
      title={state.inTrash && "Khôi phục" || "Thêm vào thùng rác"} 
      placement="top"
    >
      <span>
        <IconButton 
          disabled={loading || isLoading}
          variant="outlined"
          className={clsx(styles.option)}
          onClick={()=>{putTrash()}}
        >
            {state.inTrash && <RestoreFromTrash /> || <DeleteForeverRounded />}
        </IconButton>
      </span>
    </Tooltip>
  )
}
export default memo(TrashButton);