import {memo,Fragment,useContext} from 'react';
import {formatByte} from "../../../../../../config/Format";
import {ItemContext} from "../provider";
import {Grid,Typography} from '@mui/material/';
function ItemProgress(props){
    const {data,isLoading} = useContext(ItemContext)
    return (
        <Grid item {...props}>
            <Typography variant="h6" sx={{overflow:"hidden",textOverflow:"ellipsis"}}>{data.Name}</Typography>
            {
                (data.Error) && (<>Có lỗi:{data.Error}</>)
                || (isLoading
                && (<>Đang tải:{formatByte(data.loaded)}/{formatByte(data.Size)}</>)
                || (<>Đã tải:{formatByte(data.Size)}</>))
            }
        </Grid>
    )
};export default memo(ItemProgress)