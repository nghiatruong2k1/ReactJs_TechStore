import {memo} from 'react';
import clsx from 'clsx';
import {Container,Grid} from '@mui/material/';
import styles from './styles.module.css';



import Logo from "./Logo/";
import ProfileButton from "./Profile/";
import MessageButton from "./Message/";

function AdminHeader({className,...props}){
  return(
    <Container
        component="header" 
        maxWidth="100%"
        disableGutters
        className={clsx(className,styles.header)}
        sx={{px:2,py:1}}
    >
      <Grid container 
        alignItems="center"
        columnSpacing={1}
      >
        <Logo xs={1.5}/>
        <Grid item xs></Grid>
        <MessageButton />
        <ProfileButton />
      </Grid>
    </Container>
  )
}
export default memo(AdminHeader);
