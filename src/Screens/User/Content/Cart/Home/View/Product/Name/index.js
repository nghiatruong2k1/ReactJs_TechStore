import {memo,Fragment} from 'react';
import {NavLink} from "react-router-dom";
import {getRoute} from "../../../../../../../../Config/Route";
import {Grid,Skeleton,Typography} from '@mui/material/';
function NameComponent({alias,name,loading,...props}){
    return (
    <Grid item {...props}>
        <Typography component={!loading && NavLink || "p"} to={getRoute("user","product","detail",{alias})}>
          {
            !loading && (name ?? "Đang cập nhật")
            ||(<Skeleton className="skeleton" />)
          }
        </Typography>
     </Grid>
    )
};export default memo(NameComponent)