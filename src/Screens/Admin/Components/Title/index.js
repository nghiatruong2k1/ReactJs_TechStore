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
      <Stack component={Typography} variant={"h3"} direction="row" spacing={1} alignItems="center">
        {
          to &&
          (<Tooltip title="Quay lại" placement="top" arrow>
            <IconButton component={NavLink} to={to ?? "/"}>
              <ArrowCircleLeft />
            </IconButton>
          </Tooltip>
          )
        }
        <span style={{flex:1}}>{text}</span>
        {children}
      </Stack>
    </Grid>
  )
}
export default memo(DashboardTitle);