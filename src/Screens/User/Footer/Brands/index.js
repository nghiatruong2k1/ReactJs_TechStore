import {useState,useEffect} from 'react';
import {getRoute} from "../../../../Config/Route";
import {useFetch} from "../../../../Config/Fetch/";
function Brands(){
  const [datas,setDatas] = useState([]);
  const [isLoading,setLoading] = useState(false);
  const Fetch = useFetch();
  useEffect(function() {
    Fetch.get({
        api:"api/brand"
        ,onStart:(()=>{
          setDatas(Array(5).fill(undefined));
          setLoading(true);
        })
        ,onEnd:(()=>{
          setLoading(false);
        })
        ,onThen:(result => {
            if(result.data){
              setDatas(result.data.map(function(data,index){
                return {
                  text:data.Name,
                  to:`${getRoute("user","product","brand",{alias:data.Alias})}`
                }
              }));
            }else{
              setDatas([]);
            }
        }),onError:(error=> {
            setDatas([])
        })
    })
  },[])
  return [datas,isLoading]
}
export default Brands;