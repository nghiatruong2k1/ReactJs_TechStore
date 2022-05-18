import {memo,useContext} from 'react';
import {Box} from '@mui/material/';
import {Frame,Image} from "../../../../../../../../../../../Components/";
function CellImage({name,nameAlt,loading,data,sx,...props}){
  return(
    <Box {...sx} {...props}>
      <Frame rectangle loading={loading}>
        <Image contain alt={data && data[nameAlt]} src={data && data[name]}/>
      </Frame>
    </Box>
  )
}
export default memo(CellImage);