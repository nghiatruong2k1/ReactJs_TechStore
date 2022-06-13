import {memo} from 'react';
import {
  CardHeader,
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
	      title={"Tùy chọn"}
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