import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Card} from '@mui/material/';

import {Frame,Image} from "../../../../../../../../Components/";
import {DetailContext} from '../../init';

function ImageView({left,right,...props}){
  const {state} = useContext(DetailContext);
  return(
    <Card>
      <Frame square>
        <Image 
          contain 
          alt={state.data.Name} 
          src={state.data.ImageUrl}
        />
      </Frame>
    </Card>
  )
}
export default memo(ImageView);