import {memo,useContext} from 'react';
import {
  CardHeader,
  Divider,
  IconButton,
  Tooltip
} from '@mui/material/';
function NavHead({onClose,...props}){
	return (
	    <CardHeader
          sx={{px:1,py:1.5}}
	      avatar={
	        <span className="fas fa-bars" sx={{fontSize:"2em !important"}}/>
	      }
	      titleTypographyProps={{
	        component:"h6"
	      }}
	      title={"Menu"}
	      action={
	        <Tooltip placement="top" title="Đóng">
	          <IconButton sx={{color:"#f00"}} onClick={onClose}>
	            <span className='fas fa-times'/>
	          </IconButton>
	        </Tooltip>
	      }
	    >
	   </CardHeader>
	)
}
export default memo(NavHead);