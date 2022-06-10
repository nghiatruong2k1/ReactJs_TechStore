import {memo,Fragment} from 'react';
import { formatNumber } from '../../../../../../../../Config/Format';

function OrderDetail({cart,auth,state,...props}){
    const {count,price} = cart.reduce(function(result,product){
        if(product){
          result.count+=product.Quantity;
          result.price+=product.Price * product.Quantity;
        }
        return result
    },{count:0,price:0})
    let salePrice = 0;
    if(state.voucher){
      salePrice = price * state.voucher.value / 100;
    }
    let name = (auth.FirstName || "") +" "+ (auth.LastName || "");
    return (
    <>
        <table>
            <tr>
                <td>Tên khách hàng:</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>{auth.Email}</td>
            </tr>
            <tr>
                <td>Điện thoại:</td>
                <td>{auth.Phone}</td>
            </tr>
            <tr>
                <td>Địa chỉ:</td>
                <td>{auth.Location}</td>
            </tr>
        </table>
        <hr/>
        <table>
            <tr>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
            </tr>
            {
                cart.map(function(product,index){
                    return(
                        <tr  key={index}>
                            <td>{product.Name}</td>
                            <td>{formatNumber(product.Price) +" đ"}</td>
                            <td>{"x"+formatNumber(product.Quantity,3,0)}</td>
                        </tr>
                    )
                })
            }
        </table>
        <hr />
        <table>
            <tr>
                <td>Tổng số lượng:</td>
                <td>{formatNumber(count,3,0)}</td>
            </tr>
            <tr>
                <td>Tổng giá:</td>
                <td>{formatNumber(price,3,0)+" đ"}</td>
            </tr>
            <tr>
                <td>Giảm giá:</td>
                <td>{formatNumber(salePrice,3,0)+" đ"}</td>
            </tr>
            <tr>
                <td>Tổng thanh toán:</td>
                <td>{formatNumber(price-salePrice,3,0)+" đ"}</td>
            </tr>
        </table>
    </>
    )
};export default memo(OrderDetail)