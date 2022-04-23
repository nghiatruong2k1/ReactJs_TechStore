import {useState,useEffect} from 'react';
function Component(){
  const [values,setValues] = useState([]);
  const Fetch = global.config.useFetch();
  function handleGetData(){
      Fetch.get({
          api:"api/admin/brand/",
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
  useEffect(function(){
      handleGetData();
  },[]);
  return [values]
}
export default Component;