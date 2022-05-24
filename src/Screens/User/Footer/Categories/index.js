import {useState,useEffect} from 'react';
import {getRoute} from "../../../../Config/Route/";
import {useGet} from "../../../../Config/Fetch/";
function Categories(){
  const [{data,isLoading}] = useGet([],function(){
    return {
      api:"api/category"
      ,onStart:(()=>{
        return Array(5).fill(undefined);
      })
      ,onThen:(result => {
          if(result.data){
            return result.data.map(function(data,index){
              return {
                text:data.Name,
                to:`${getRoute("user","product","brand",{alias:data.Alias})}`
              }
            });
          }
      })
    }
  },[],"footer category")
  return [data,isLoading]
}
export default Categories;