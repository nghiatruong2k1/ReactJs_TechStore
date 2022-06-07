import {memo,Fragment} from 'react';
import {Grid} from '@mui/material/';
import {Frame,Image} from "../../../../../../../../Components";
function ImageComponent({loading,url,alt,...props}){
    return (
    <Grid item {...props}>
           <Frame square loading={loading}>
             <Image contain src={url}/>
           </Frame>
    </Grid>
    )
};export default memo(ImageComponent)