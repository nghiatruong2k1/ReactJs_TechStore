import {memo,useRef,useState,useContext} from 'react';
import {Menu,MenuItem,ListItemButton,ListItemText,ListItemIcon,Icon} from '@mui/material/';
import OptionButton from "../../../../Option/Components/Button/"
import {DataContext} from '../../../../provider';
const OptionItem = memo(function ({text,icon,onClick,...props}){
  return(
    <MenuItem divider sx={{p:0.5}}>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItemButton>
    </MenuItem>
  )
})


function AfterOption({display,...props}){
  const [isOpen,setOpen] = useState(false);
  const {dispath,dispathDisplay} = useContext(DataContext);
  const thisRef = useRef();
  return(
    <OptionButton 
      title="Tùy chọn" 
      ref={thisRef}
      onClick={()=>(setOpen(!isOpen))}
      icon={<Icon className="fas fa-ellipsis-v" />}
      sx={{fontSize:"0.8em !important"}}
    >
      <Menu
        anchorEl={thisRef.current}
        onClose={()=>(setOpen(false))}
        MenuListProps={{sx:{py:0.5,px:1}}}
        open={Boolean(thisRef.current && isOpen)}
      >
        <OptionItem text="Ẩn hiển thị" 
          icon={<Icon className="fas fa-eye-slash"/>}
          onClick={()=>(dispathDisplay(["toggle_show",display]))}
        />
        <OptionItem text="Sắp xếp tăng" 
          icon={<Icon className="fas fa-sort-amount-up"/>}
          onClick={()=>(dispath(["set_sort",[display.name]]))}
        />
        <OptionItem text="Sắp xếp giảm" 
          icon={<Icon className="fas fa-sort-amount-down"/>}
          onClick={()=>(dispath(["set_sort",[display.name,true]]))}
        />
      </Menu>
    </OptionButton>
  )
}
export default memo(AfterOption);