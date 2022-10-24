import {memo,useContext} from 'react';
import {Card} from '@mui/material/';

import {Frame,Image} from "../../../../components";
import {DetailContext} from '../Detail/provider';
function ImageView({left,right,...props}){
  const {data,handle} = useContext(DetailContext);
  return(
    <Card>
      <Frame square>
        <Image 
          contain 
          alt={handle.get("Name","")} 
          src={handle.get("Url","")}
        />
      </Frame>
    </Card>
  )
}
export default memo(ImageView);