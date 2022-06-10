import {memo,Fragment} from 'react';
import {render} from 'react-dom/';
import {getRoute} from "../../../../../../../Config/Route";

import OrderDetail from './OrderDetail';
function Component ({auth,id,children}){
    let name = (auth.FirstName || "") +" "+ (auth.LastName || "");
    const url = `${window.location.origin}${getRoute("user","cart","confirm",{id})}`;
    return (
        <div>
            <div>
                <p style={{fontWeight:'bold'}}>Xin chào {name}</p>
                <p style={{fontWeight:'bold'}}>Bạn có 1 đơn hàng đang chờ xác nhận</p>
            </div>
            <div>
                {children}
            </div>
            <div>
                <p>Vui lòng xác nhận:</p>
                <p> 
                    <a href={url}>{url}</a>
                </p>
            </div>
        </div>
    )
}
function Mailer({auth,cart,state,children,...props}){
    const div = document.createElement("div");
    render(<Component auth={auth}{...props}>
        <OrderDetail 
            cart={cart}
            auth={auth}
            state={state}
        />
    </Component>,div);
    let name = (auth.FirstName || "") +" "+ (auth.LastName || "");
    return{
        toEmail:auth.Email,
        toName:name,
        fromName:global.config.WebsiteName,
        subject:"Bạn có 1 yêu cầu xác nhận đơn hàng mới",
        body:div.innerHTML
    }
};
export default Mailer