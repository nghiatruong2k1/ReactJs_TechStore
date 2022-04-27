import {memo,useContext} from 'react';
import {TableCell} from '@mui/material/';
import {Frame,Image} from "../../../../../../../../../../../Components/";
import {RowDataContext} from '../provider';
function CellImage({display,...props}){
  const {data,loading} = useContext(RowDataContext);
  return(
    <TableCell
       align="center"
       style={{minWidth:'15em'}} 
       {...props}
    >
       <Frame rectangle loading={loading}>
         <Image contain src={data && data[display.key]}/>
       </Frame>
    </TableCell>
  )
}
export default memo(CellImage);