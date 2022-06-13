import {memo} from 'react';
import {InputAdornment,Tooltip,IconButton} from '@mui/material/';
function SearchOption({...props}){
	return(
		<InputAdornment position="start"sx={{color:'inherit !important'}}>
      <Tooltip title="Tìm kiếm" placement="top" arrow sx={{color:'inherit !important'}}>
        <span>
          <IconButton type="submit" sx={{color:'inherit !important'}}>
            <span className="fas fa-search"></span>
          </IconButton> 
        </span>
      </Tooltip>  
    </InputAdornment>
	)
}
export default memo(SearchOption);