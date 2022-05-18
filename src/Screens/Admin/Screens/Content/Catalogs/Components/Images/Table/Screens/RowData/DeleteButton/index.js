import {memo,useContext,useState,useMemo} from 'react';
import clsx from 'clsx';
import {DeleteForeverRounded} from '@mui/icons-material/';
import {Tooltip,IconButton} from '@mui/material/';
import {DataContext} from "../../../../provider";
import { useFetch } from '../../../../../../../../../../../Config/Fetch/';

function DeleteButton({data,loading,...props}){
  const [isLoading,setLoading] = useState(false);
  const {state,handle,config} = useContext(DataContext);
  const Fetch = useFetch();
  const deleteData = function (){
      data && Fetch.delete({
        api:"api/admin/"+config.controller+"/"+data.Id
        ,onStart:function(){
          setLoading(true)
        },onEnd:function(){
          handle.refetch && handle.refetch();
          setLoading(false)
        }
      }) 
    }
  if(data && data.IsTrash){
    return(
    <Tooltip 
      title="Xóa" 
      placement="top"
      arrow
    >
      <span>
        <IconButton 
          onClick={()=>{deleteData()}}
          disabled={loading || isLoading}
          variant="outlined"
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