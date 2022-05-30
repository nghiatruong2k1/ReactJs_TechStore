import {memo,useState,useRef} from 'react';
import clsx from 'clsx';
import {
  Grid,
  Stack,
  Tooltip,
  IconButton,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  SvgIcon
} from '@mui/material/';
import {
  Feed,Add,Remove,Save
} from '@mui/icons-material/';
import styles from './styles.module.css';

function AccordionContent({title,icon,option,className,children,...props}){
  const [isOpen,setOpen] = useState(true);
  function toggleOpen(event){
    setOpen(!isOpen)
  } 
  return(
  <>
    <Grid item xs p={1} className={clsx(styles.col,{[className]:className})} {...props}>
      <Accordion 
          disableGutters 
          defaultExpanded
          className={styles.container} 
          sx={{height: isOpen && "100%" || "auto"}}
          expanded={isOpen}
        >
          <AccordionSummary className={styles.sumary}>
            <Stack direction = 'row' alignItems="center" width="100%" component={Typography} variant="h5"  spacing={1}>
              <SvgIcon component={icon || Feed} className={styles.icon} />
              <span style={{flex:1}} className={styles.title} >
                  {title}
              </span>
              {isOpen && option}
              <Tooltip title={isOpen && "Đóng" ||  "Mở"} placement="top">
                <IconButton 
                    onClick={toggleOpen}>
                    {isOpen && <Remove /> ||  <Add />}
                </IconButton>
              </Tooltip>
            </Stack>
          </AccordionSummary>
          <Divider/>
          <AccordionDetails>
              {children}
          </AccordionDetails>
        </Accordion>
    </Grid>
  </>
  )
}
export default memo(AccordionContent);