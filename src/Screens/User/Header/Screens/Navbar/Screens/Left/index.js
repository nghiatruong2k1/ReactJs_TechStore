import {memo,useMemo} from 'react';
import {getRoute} from "../../../../../../../Config/Route";
import NavMenu from "../../Components/NavMenu/"
function LeftNav({...props}){
  const datas = useMemo(function(){
    return [
      {
        to:"/",
        text:"Trang chủ"
      },{
        to:getRoute("user","category"),
        text:"Danh mục"
      },{
        to:getRoute("user","brand"),
        text:"Thương hiệu"
      },{
        to:getRoute("user","service"),
        text:"Dịch vụ"
      },{
        to:getRoute("user","post"),
        text:"Tin tức"
      }
    ]
  },[])
  return(
    <NavMenu {...props} datas={datas}></NavMenu>
  )
}
export default memo(LeftNav);