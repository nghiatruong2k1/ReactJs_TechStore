
import {memo,useMemo} from 'react';
import {getRoute} from "../../../../../../../Config/Route";
import NavMenu from "../../Components/Menu/";
import LanguageButton from "./Language/";
function RightNav({...props}){
  const datas = useMemo(function(){
    return [
      {
        to:"#",
        text:"Tải ứng dụng"
      }
    ]
  },[])
  return(
    <NavMenu {...props} datas={datas} />
  )
}
export default memo(RightNav);
