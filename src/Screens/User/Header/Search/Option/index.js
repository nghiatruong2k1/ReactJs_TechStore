import {memo} from 'react';
import {ButtonGroup,IconButton,Tooltip} from '@mui/material/';
import {Search} from '@mui/icons-material/';
function SeachOption({...props}){
  return(
    <ButtonGroup>
      <Tooltip placement="top" title="Tìm kiếm"arrow>
        <IconButton type="submit">
          <Search />
        </IconButton> 
      </Tooltip> 
    </ButtonGroup>
  )
}
export default memo(SeachOption);