import {memo,useState} from 'react';
import {Box,Button,Menu,MenuItem} from '@mui/material/';
import {
  KeyboardArrowDown
} from '@mui/icons-material/';
function Language({...props}){
  const [anchorEl, setAnchorEl] = useState(null);
  const [index,setIndex] = useState(0);
  const argsLanguage = ["Vietnamese","English","Russian","Chinese"];
  function handleClose(){
    setAnchorEl(null);
  }
  function handleOpen(event){
    setAnchorEl(event.target)
  }
  function handleSelect(index){
    setIndex(index)
  }
  return(
    <Box component="li" position="relative">
        <Button 
          onClick={handleOpen}
          component="a"
          endIcon={<KeyboardArrowDown />}
        >
          {argsLanguage[index]}
        </Button>
        <Menu 
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          onClick={handleClose}
        >
          {
            argsLanguage.map(function(language,index){
              return(
                <MenuItem key={index} onClick={()=>(handleSelect(index))}>{language}</MenuItem>
              )
            })
          }
        </Menu>
    </Box>
  )
}
export default memo(Language);