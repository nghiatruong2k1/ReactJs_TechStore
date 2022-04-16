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
  Typography
} from '@mui/material/';
import {
  Feed,Add,Remove,Save
} from '@mui/icons-material/';
import styles from './styles.module.css';


function AccordionContent({title,option,children,...props}){
  const [isOpen,setOpen] = useState(true);
  function toggleOpen(event){
    setOpen(!isOpen)
  } 
  return(
  <>
    <Grid item {...props}>
      <Accordion disableGutters 
        defaultExpanded
        className={styles.container} 
        expanded={isOpen}
      >
        <AccordionSummary className={styles.sumary}>
            <Stack direction = 'row' alignItems="center" width="100%" spacing={1}>
              <Feed className={styles.icon} />
              <Typography variant="h5" flex="1" className={styles.title} >
                  {title}
              </Typography>
              {option}
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