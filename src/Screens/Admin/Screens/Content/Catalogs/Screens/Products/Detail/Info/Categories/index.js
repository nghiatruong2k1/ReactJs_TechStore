import {useState,useEffect} from 'react';
import { useFetch } from '../../../../../../../../../../Config/Fetch/';
function Component(){
  const [values,setValues] = useState([]);
  const Fetch = useFetch();
  async function handleGetData(){
      return await Fetch.get({
          api:"api/admin/category/",
          params:{
            isTrash:false,
            isPublic:true
          },onThen:(result => {
              setValues(result.data);
          }),onError:(error=> {
              setValues([])
          })
      })
  }
  useEffect(async function(){
      return await handleGetData();
  },[]);
  return [values]
}
export default Component;