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
        <ul>
            <li style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                <span>Tên khách hàng:</span>
                <span>{name}</span>
            </li>
            <li style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                <span>Email:</span>
                <span>{auth.Email}</span>
            </li>
            <li style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                <span>Điện thoại:</span>
                <span>{auth.Phone}</span>
            </li>
            <li style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                <span>Địa chỉ:</span>
                <span>{auth.Location}</span>
            </li>
        </ul>
        <hr/>
        <ul>
            {
                cart.map(function(product,index){
                    return(
                        <li  key={index} style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                            <span>{product.Name}</span>
                            <span>{formatNumber(product.Price) +" đ"}</span>
                            <span>{"x"+formatNumber(product.Quantity,3,0)}</span>
                        </li>
                    )
                })
            }
        </ul>
        <hr />
        <ul>
            <li style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                <span>Tổng số lượng:</span>
                <span>{formatNumber(count,3,0)}</span>
            </li>
            <li style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                <span>Tổng giá:</span>
                <span>{formatNumber(price,3,0)+" đ"}</span>
            </li>
            <li style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                <span>Giảm giá:</span>
                <span>{formatNumber(salePrice,3,0)+" đ"}</span>
            </li>
            <li style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                <span>Tổng thanh toán:</span>
                <span>{formatNumber(price-salePrice,3,0)+" đ"}</span>
            </li>
        </ul>
    </>
    )
};export default memo(OrderDetail)