
import {getRoute} from "../../../../Config/Route/";

function Helps(){
  return [
    [{
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
    }]
  ]
}
export default Helps;