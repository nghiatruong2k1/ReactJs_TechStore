import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Tooltip,IconButton} from '@mui/material/';
import {RestoreFromTrash,DeleteForeverRounded} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ListContext} from "../../../../../provider";
import {ViewContext} from "../../../../provider";
import {RowDataContext} from '../../provider';
function TrashButton({...props}){
  const {toast} = useContext(global.config.context);
  const {data} = useContext(RowDataContext);
  const {controller} = useContext(ListContext);
  const {state,handle} = useContext(ViewContext);
  const Fetch = global.config.useFetch();
  function putTrash(){
    const newTrash = !data.IsTrash;
    Fetch.put({
      api:"api/admin/"+controller
      ,params:{
          ...data,
          IsTrash:newTrash
      },onEnd:function(){
        handle.refetch();
      }
    })    
  }
  return(
     <Tooltip 
          title={state.inTrash && "Khôi phục" || "Thêm vào thùng rác"} 
          placement="top"
        >
            <IconButton 
              variant="outlined"
                className={clsx(styles.option)}
                onClick={()=>{putTrash()}}
            >
                {state.inTrash && <RestoreFromTrash /> || <DeleteForeverRounded />}
            </IconButton>
        </Tooltip>
  )
}
export default memo(TrashButton);