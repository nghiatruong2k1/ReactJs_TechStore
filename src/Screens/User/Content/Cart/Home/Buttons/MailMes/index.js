import {memo,Fragment} from 'react';

import {Card,CardHeader,CardContent,Typography,Link} from '@mui/material/';
import {getRoute} from "../../../../../../../Config/Route";
import {render} from 'react-dom/';
function Component ({auth,id}){
    let name = (auth.FirstName || "") +" "+ (auth.LastName || "");
    const url = `${window.location.origin}${getRoute("user","cart","confirm",{id})}`;
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography>Xin chào {name}</Typography>
                <Typography>Bạn có 1 đơn hàng đang chờ xác nhận</Typography>
                <Typography> 
                    <a href={url}>{url}</a>
                </Typography>
            </CardContent>
        </Card>
    )
}
function Mailer({auth,...props}){
    const div = document.createElement("div");
    render(<Component auth={auth}{...props}/>,div);
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