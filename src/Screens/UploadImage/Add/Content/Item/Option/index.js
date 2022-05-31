import {memo,Fragment,useContext} from 'react';
import {Tooltip,IconButton,Grid,Stack} from '@mui/material/';
import {ItemContext} from "../provider";
import {AddImageContext} from "../../../provider";
import {Delete,Save} from '@mui/icons-material/';
function ItemOption(props){
    const {data} = useContext(ItemContext)
    const {handle,dispath} = useContext(AddImageContext);
    return (
        <Grid item {...props}>
            <Stack direction="row" spacing={1} alignItems="center">
                <Tooltip title="Xóa" arrow>
                    <IconButton onClick={()=>{dispath(['remove',data])}}>
                        <Delete />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Lưu" arrow>
                    <IconButton onClick={()=>{handle.save(data)}}>
                        <Save />
                    </IconButton>
                </Tooltip>
            </Stack>
        </Grid>
    )
};export default memo(ItemOption)