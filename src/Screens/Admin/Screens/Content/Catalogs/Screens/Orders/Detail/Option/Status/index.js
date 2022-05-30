import {useState,useEffect} from 'react';
import { useGet } from '../../../../../../../../../../Config/Fetch/';
function Component(){
  const [{data,isLoading}] = useGet([],function(){
      return {
        api:"api/admin/orderstatus/",
        params:{
            isTrash:false
        }
        ,onThen:(({data}) => {
            return Array.isArray(data) && data || []
        }),onStart:(()=>{
            return []
        })
    }
  },[])
  return [data,isLoading]
}
export default Component;