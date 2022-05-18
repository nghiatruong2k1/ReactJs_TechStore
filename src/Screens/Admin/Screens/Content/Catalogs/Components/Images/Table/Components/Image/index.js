import {memo,useContext} from 'react';
import {TableCell} from '@mui/material/';
import {Frame,Image} from "../../../../../../../../../../Components/";
function CellImage({display,loading,data,sx,...props}){
  return(
    <TableCell
       align="center"
       sx={{minWidth:'15em',...sx}} 
       {...props}
    >
       <Frame rectangle loading={loading}>
         <Image contain alt={data && data[display && display.altKey]} src={data && data[display && display.key]}/>
       </Frame>
    </TableCell>
  )
}
export default memo(CellImage);