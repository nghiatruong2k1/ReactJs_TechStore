import {memo,useState} from 'react';
import {
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Accordion,
  AccordionDetails
} from '@mui/material/';
import {
  ArrowLeft,
  ArrowDropDown,
  RadioButtonUnchecked,
  RadioButtonChecked
} from '@mui/icons-material/';
import styles from '../styles.module.css';
import MenuItem from "../Item/";
function MenuAccordion({icon,text,subData,...props}){
  const [isOpen,setOpen] = useState(false);
  function toggleOpen(event){
    setOpen(!isOpen)
  }
  return(
      <Accordion 
        component="li"
        disableGutters
        defaultExpanded
        expanded={isOpen}
        className={styles.item}
      >
        <ListItemButton 
          onClick={toggleOpen} 
          className={styles.button}
          >
          <ListItemIcon className={styles.icon}>{icon}</ListItemIcon>
            <ListItemText className={styles.text}>{text}</ListItemText>
            <ListItemIcon className={styles.icon}>
              {isOpen && <ArrowDropDown /> || <ArrowLeft />}
            </ListItemIcon>
          </ListItemButton>
        <AccordionDetails  className={styles.body}>
          <List disablePadding>
            {
              subData.map(function(data,index){
                return(
                  <MenuItem 
                    icon={<RadioButtonUnchecked />} 
                    activeIcon = {<RadioButtonChecked />}  
                    key={index}
                    {...data} 
                  />
                )
              })
            }
          </List>
        </AccordionDetails>
      </Accordion>
  )
}
export default memo(MenuAccordion);