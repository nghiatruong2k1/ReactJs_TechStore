
import {getRoute} from "../../../../../Config/Route";
import {memo,Fragment,useMemo} from 'react';
import FooterList from '../../Components/FooterList';
function FooterHelps(props){
  const {datas,isLoading} = useMemo(function(){
    return {
      datas:[{
          text:"Chính sách bảo mật",
          to:getRoute("about","chinh-sach-bao-mat")
        },{
          text:"Chính sách thanh toán",
          to:getRoute("about","chinh-sach-thanh-toan")
        },{
          text:"Chính sách giao hàng",
          to:getRoute("about","chinh-sach-giao-hang")
        },{
          text:"Chính sách khuyến mãi",
          to:getRoute("about","chinh-sach-khuyen-mai")
      }],isLoading:false
    }
  },[])
  return (
    <Fragment>
      <FooterList datas={datas} loading={isLoading} title="Chính sách" {...props}/>
    </Fragment>
  )
};
export default memo(FooterHelps)

