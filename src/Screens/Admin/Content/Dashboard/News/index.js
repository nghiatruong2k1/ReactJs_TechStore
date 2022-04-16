import {memo,useState} from 'react';
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
  Feed,Add,Remove
} from '@mui/icons-material/';



import PostCard from "./Post/";
import styles from './styles.module.css';
function News({...props}){
  const [isOpen,setOpen] = useState(true);
  function toggleOpen(event){
    setOpen(!isOpen)
  }
  return(
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
                  NopCommerce News
              </Typography>
              <Tooltip title={isOpen && "Close" ||  "Open"} placement="top">
                <IconButton 
                    onClick={toggleOpen}>
                    {isOpen && <Remove /> ||  <Add />}
                </IconButton>
              </Tooltip>
            </Stack>
        </AccordionSummary>
        <Divider/>
        <AccordionDetails>
          <Grid container columnSpacing={2} rowSpacing={2}>
              {
                [1,2,3].map(function(data,index){
                  return(
                    <PostCard xs={12} md={6} lg={4} xxl={3} key={index} />
                  )
                })
              }
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
      
  )
}
export default memo(News);