import {Frame,Image} from "../../../../../../components";
import {memo,Fragment,useContext} from 'react';
import {Grid,Paper} from '@mui/material/';
import {ItemContext} from "../provider";
function ItemImage(props){
    const {data} = useContext(ItemContext)
    return (
        <Grid item {...props}>
            <Frame component={Paper} variant="outlined" square>
                <Image contain src={data.Url}/>
            </Frame>
        </Grid>
    )
};export default memo(ItemImage)