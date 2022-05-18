import {memo,useContext,useState,useMemo} from 'react';
import clsx from 'clsx';
import {DeleteForeverRounded} from '@mui/icons-material/';

import {ViewContext} from "../../../../provider";
import {RowDataContext} from '../../provider';
import {NavLink} from "react-router-dom"
import { useFetch } from '../../../../../../../../../../../Config/Fetch/';

import {OptionButton} from "../index";
function DeleteButton({...props}){
  const {toast} = useContext(global.config.context);
  const {data,loading} = useContext(RowDataContext);
  const [isLoading,setLoading] = useState(false);
  const {state,handle,controller} = useContext(ViewContext);
  const Fetch = useFetch();
  const deleteData = useMemo(function(){
    return function (){
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
  },[controller,data])
  if(state.inTrash){
    return(
      <OptionButton 
        title={"Xóa"} 
        onClick={()=>{deleteData()}}
        disabled={loading || isLoading}
        icon={<DeleteForeverRounded />}
      />
    )
  }else{
    return <></>
  }
}
export default memo(DeleteButton);