import {memo,useContext,useState,useMemo} from 'react';
import clsx from 'clsx';
import {Tooltip,IconButton} from '@mui/material/';
import {RestoreFromTrash,DeleteForeverRounded} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DataContext} from "../../../../provider";
import { useFetch } from '../../../../../../../../../../../Config/Fetch/';
function TrashButton({data,loading,...props}){
  const {toast} = useContext(global.config.context);
  const [isLoading,setLoading] = useState(false);
  const {state,handle,config} = useContext(DataContext);
  const Fetch = useFetch();
  const putTrash = function(){
      data && Fetch.put({
        api:"api/admin/"+config.controller
        ,params:{
            ...data,
            IsTrash:!data.IsTrash
        },onStart:function(){
          setLoading(true)
        },onEnd:function(){
          handle.refetch && handle.refetch();
          setLoading(false)
        }
      })    
    }
  return(
    <Tooltip     
      title={data && data.IsTrash && "Khôi phục" || "Thêm vào thùng rác"} 
      placement="top"
      arrow
    >
      <span>
        <IconButton 
          disabled={loading || isLoading}
          variant="outlined"
          className={clsx(styles.option,"trash-btn")}
          onClick={()=>{putTrash()}}
        >
            {data && data.IsTrash && <RestoreFromTrash /> || <DeleteForeverRounded />}
        </IconButton>
      </span>
    </Tooltip>
  )
}
export default memo(TrashButton);