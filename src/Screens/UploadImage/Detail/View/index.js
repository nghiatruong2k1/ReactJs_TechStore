import {memo,useContext} from 'react';
import {Card} from '@mui/material/';

import {Frame,Image} from "../../../../Components/";
import {DetailContext} from '../provider';
function ImageView({left,right,...props}){
  const {data,handle} = useContext(DetailContext);
  return(
    <Card>
      <Frame square>
        <Image 
          contain 
          alt={handle.get("name","")} 
          src={handle.get("url","")}
        />
      </Frame>
    </Card>
  )
}
export default memo(ImageView);