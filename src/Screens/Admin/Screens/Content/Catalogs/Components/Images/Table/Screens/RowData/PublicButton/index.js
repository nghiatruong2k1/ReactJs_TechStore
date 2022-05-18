import {memo,useContext,useState,useMemo} from 'react';
import clsx from 'clsx';
import {
  Tooltip,IconButton
} from '@mui/material/';
import {
  Visibility,VisibilityOff
} from '@mui/icons-material/';
import {DataContext} from "../../../../provider";
import styles from './styles.module.css';
import { useFetch } from '../../../../../../../../../../../Config/Fetch/';
function PublicButton({data,loading,...props}){
  const [isLoading,setLoading] = useState(false);
  const {state,handle,config} = useContext(DataContext);
  const Fetch = useFetch();
  const putPublic = function(){
      data && Fetch.put({
        api:"api/admin/"+config.controller
        ,params:{
            ...data,
            IsPublic:!data.IsPublic
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
      title={data && data.IsPublic && "Công khai" || "Riêng tư"} 
      placement="top"
      arrow
    >
      <span>
        <IconButton 
          variant="outlined"
          disabled={loading || isLoading}
          className={clsx(styles.option)}
          onClick={()=>{putPublic()}}
        >
            {data && data.IsPublic && <Visibility /> || <VisibilityOff />}
        </IconButton>
      </span>
    </Tooltip>
  )
}
export default memo(PublicButton);