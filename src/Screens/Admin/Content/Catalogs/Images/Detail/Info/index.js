import {memo,useState,useRef} from 'react';
import clsx from 'clsx';
import {
  Grid,
  Stack,
  Tooltip,
  TextField,
  IconButton,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Select,
  Checkbox,
  MenuItem
} from '@mui/material/';
import {
  Feed,Add,Remove,Save
} from '@mui/icons-material/';
import styles from './styles.module.css';


import InfoName from "./Name/";
import InfoSize from "./Size/";
import InfoType from "./Type/";
import InfoPublic from "./Public/";
import InfoInput from "./Input/";

import InfoOption from "./Option/";
import InfoView from "./View/";
import Provider from "./provider";

function ProductInfo({...props}){
  const [isOpen,setOpen] = useState(true);
  function toggleOpen(event){
    setOpen(!isOpen)
  } 
  return(
  <Provider>
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
                  Image info
              </Typography>
              {isOpen && <InfoOption />}
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
            <Grid container rowSpacing={1} columnSpacing={2}>
              <Grid item xs={8}>
                <Stack spacing={1}>
                  <InfoName left={{xs:12,lg:3}} right={{xs:12,lg:9}}/>
                  <InfoSize left={{xs:12,lg:3}} right={{xs:12,lg:9}}/>
                  <InfoType left={{xs:12,lg:3}} right={{xs:12,lg:9}}/>
                  <InfoPublic left={{xs:12,lg:3}} right={{xs:12,lg:9}}/>
                  <InfoInput />
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <InfoView />
              </Grid>
            </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  </Provider>
  )
}
export default memo(ProductInfo);