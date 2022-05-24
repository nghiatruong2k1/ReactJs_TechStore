import {memo} from 'react';
import clsx from 'clsx';
import {InputAdornment,Tooltip,IconButton,Divider} from '@mui/material/';
import {} from '@mui/icons-material/';
function SearchOption({...props}){
	return(
		<InputAdornment position="start">
      <Tooltip title="Tìm kiếm" placement="top" arrow>
        <span>
          <IconButton type="submit">
            <span className="fas fa-search"></span>
          </IconButton> 
        </span>
      </Tooltip>  
    </InputAdornment>
	)
}
export default memo(SearchOption);