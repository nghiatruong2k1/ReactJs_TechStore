import {memo,useContext} from 'react';
import {Paper} from '@mui/material/';
import {Frame,Image} from "../../../../../../../../../../../Components/";
function CellImage({enableEdit,name,nameAlt,loading,data,sx,...props}){
  return(
    <Paper variant="outlined" sx={{mx:'auto',...sx}}  {...props}>
      <Frame rectangle loading={loading}>
        <Image contain name={name} alt={data && data[nameAlt]} src={data && data[name]}/>
      </Frame>
    </Paper>
  )
}
export default memo(CellImage);