import {memo} from 'react';
import clsx from 'clsx';
import {InputAdornment,Tooltip,IconButton,Divider} from '@mui/material/';
import {} from '@mui/icons-material/';
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