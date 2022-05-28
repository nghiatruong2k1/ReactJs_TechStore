
import {getRoute} from "../../../../../Config/Route";
import {useGet} from "../../../../../Config/Fetch";
import {memo,Fragment} from 'react';
import FooterList from '../../Components/FooterList';
function FooterBrands(props){
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
  return (
    <Fragment>
      <FooterList datas={data} loading={isLoading} title="Danh mục" {...props}/>
    </Fragment>
  )
};
export default memo(FooterBrands)

