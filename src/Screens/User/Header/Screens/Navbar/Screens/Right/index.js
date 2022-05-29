
import {memo,useMemo} from 'react';
import NavMenu from "../../Components/NavMenu/";
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
