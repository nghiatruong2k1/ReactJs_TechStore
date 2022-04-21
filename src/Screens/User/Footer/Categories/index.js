import {useState,useEffect} from 'react';
function Categories(){
  const [datas,setDatas] = useState([]);
  const [isLoading,setLoading] = useState(false);
  const Fetch = global.config.useFetch();
  const {getRoute} = global.config.useRoute();
  useEffect(function() {
    Fetch.get({
        api:"api/category"
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
                to:`${getRoute("user","product","category")}/${data.Alias}`
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
export default Categories;