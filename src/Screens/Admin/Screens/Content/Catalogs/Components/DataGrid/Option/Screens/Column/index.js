import {memo,useRef,useState,useContext} from 'react';
import clsx from 'clsx';
import {Menu,MenuItem,ListItemButton,ListItemIcon,ListItemText,Checkbox} from '@mui/material/';
import {ViewColumn} from '@mui/icons-material/';
import styles from './styles.module.css';
import OptionButton from "../../Components/Button/";
import {DataContext} from '../../../provider';


function ColumnItem({display,onClick,...props}){
  return(
    <MenuItem divider sx={{p:0}}>
      <ListItemButton onClick={onClick}>
        <ListItemIcon><Checkbox checked={Boolean(!display.hidden)}/></ListItemIcon>
        <ListItemText>{display.title}</ListItemText>
      </ListItemButton>
    </MenuItem>
  )
}

function ColumnButton({display,...props}){
  const {displays,dispathDisplay} = useContext(DataContext)
  const [isOpen,setOpen] = useState(false);
  const thisRef = useRef();
  return(
    <OptionButton 
      title="Hiển thị" 
      ref={thisRef}
      onClick={()=>(setOpen(!isOpen))}
      icon={<ViewColumn />}
      {...props}
    >
      <Menu
        anchorEl={thisRef.current}
        onClose={()=>(setOpen(false))}
        MenuListProps={{
          sx:{
            py:0.5,
            px:1
          }
        }}
        open={Boolean(thisRef.current && isOpen)}
      >
        {
          displays.map(function(display,index){
            return( 
              <ColumnItem 
                key={index} 
                display={display}
                onClick={()=>(dispathDisplay(["toggle_show",display]))}
              />)
          })
        }
      </Menu>
    </OptionButton>
  )
}
export default memo(ColumnButton);