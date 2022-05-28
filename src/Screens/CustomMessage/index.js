import {memo,useState,useMemo,useRef, forwardRef} from 'react';
import clsx from 'clsx';
import {
  Paper,
  Stack,
  IconButton,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  SvgIcon
} from '@mui/material/';

import {ExpandMore,Close} from '@mui/icons-material/';
import { SnackbarContent } from 'notistack';
import { makeStyles } from '@mui/styles';
import {Error,Info,CheckCircle,Warning,Notifications,Help} from '@mui/icons-material/';

const TYPES = {
  error: {
    title:"Có lỗi",
    icon:Error,
    style:{
      backgroundColor:"var(--errorBg)",
      color:"var(--error)"
    }
  },
  info: {
    title:"Thông báo",
    icon:Info,
    style:{
      backgroundColor:"var(--infoBg)",
      color:"var(--info)"
    }
  },
  success: {
    title:"Thông báo",
    icon:CheckCircle,
    style:{
      backgroundColor:"var(--successBg)",
      color:"var(--success)"
    }
  },
  warning: {
    title:"Cảnh báo",
    icon:Warning,
    style:{
      backgroundColor:"var(--warningBg)",
      color:"var(--warning)"
    }
  },
  bell:{
    title:"Thông báo",
    icon:Notifications,
    style:{
      backgroundColor:"var(--bellBg)",
      color:"var(--bell)"
    }
  },
  help:{
    title:"Thông báo",
    icon:Help,
    style:{
      backgroundColor:"var(--helpBg)",
      color:"var(--help)"
    }
  }
}

const useStyles = makeStyles((theme)=>({
    root:{
      [theme.breakpoints.up('sm')]: {
        minWidth: '20em !important',
        maxWidth: '20em !important'
      },[theme.breakpoints.up('md')]: {
        minWidth: '22em !important',
        maxWidth: '22em !important'
      }
    }
}));

const AccordionContent = forwardRef(function({title,type,message,onClose},ref){
  const [isOpen,setOpen] = useState(true);
  const styles = useStyles();
  const toggleOpen = useMemo(function(){
    return function(){
        setOpen((oldOpen)=>(!oldOpen))
    }
  },[])
  const {Title,Icon,Style} = useMemo(function(){
    return {
      Title:title || (TYPES[type] ?? TYPES['bell']).title,
      Icon:(TYPES[type] ?? TYPES['bell']).icon,
      Style:(TYPES[type] ?? TYPES['bell']).style ?? {}
    }
  },[title,type])
  return(
  <SnackbarContent ref={ref} className={styles.root}>
      <Accordion 
          disableGutters 
          defaultExpanded
          expanded={isOpen}
          style={Style}
          sx={{width:'100%'}}
        >
          <AccordionSummary>
            <Stack direction = 'row' alignItems="center" width="100%" spacing={1}>
                <SvgIcon className={styles.icon} component={Icon}/>
                <Typography variant="h6" flex="1" className={styles.title} >
                  {Title}
                </Typography>
                <IconButton onClick={toggleOpen}>
                  <SvgIcon component={ExpandMore} 
                    className={clsx(styles.icon)} 
                    sx={{transform:isOpen && 'rotate(0deg)' || 'rotate(-90deg)'}}
                  />
                </IconButton>
                <IconButton onClick={onClose}>
                  <SvgIcon component={Close} />
                </IconButton>
            </Stack>
          </AccordionSummary>
          <AccordionDetails  sx={{p:isOpen && 0.5 || 0}}>
            <Paper sx={{p:0.5,backgroundColor:"rgba(250,250,250,0.6)"}} variant="outlined">{message}</Paper>
          </AccordionDetails>
        </Accordion>
  </SnackbarContent>
  )
})

AccordionContent.displayName = "AccordionContent";

export default memo(AccordionContent);