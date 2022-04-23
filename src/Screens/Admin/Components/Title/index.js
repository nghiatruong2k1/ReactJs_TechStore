import {memo,useEffect} from 'react';
import clsx from 'clsx';
import {Grid,Stack,Typography,IconButton,Tooltip} from '@mui/material/';
import {ArrowCircleLeft} from '@mui/icons-material/';
import {NavLink,useNavigate,useLocation}from'react-router-dom';
import styles from './styles.module.css';
function DashboardTitle({to,children,text,...props}){
  const location = useLocation();
  useEffect(function(){
    global.config.setTitleWebsite(text);
  },[])
  useEffect(function(){
    global.config.setTitleWebsite(text);
  },[location,text])
  return(
    <Grid item xs {...props}>
      <Stack direction="row" spacing={1}>
        {
          to &&
          (<Tooltip title="Back" placement="top">
            <IconButton component={NavLink} to={to ?? "/"}>
              <ArrowCircleLeft />
            </IconButton>
          </Tooltip>
          )
        }
        <Typography flex="1" display="flex" alignItems="center" variant="h4">{text}</Typography>
        {children}
      </Stack>
    </Grid>
  )
}
export default memo(DashboardTitle);