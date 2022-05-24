import {useState,useEffect} from 'react';
import {getRoute} from "../../../../Config/Route/";
import {useGet} from "../../../../Config/Fetch/";
function Brands(){
  const [{data,isLoading}] = useGet([],function(){
    return {
      api:"api/brand"
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
  },[],"footer brand")
  return [data,isLoading]
}
export default Brands;