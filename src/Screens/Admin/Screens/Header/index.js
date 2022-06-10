import {memo} from 'react';
import clsx from 'clsx';
import {Container,Grid} from '@mui/material/';
import styles from './styles.module.css';




import ProfileButton from "./Profile/";
import MessageButton from "./Message/";

function AdminHeader({className,...props}){
  return(
    <Container
        component="header" 
        className={clsx(className,styles.header)}
    >
      <Grid container 
        alignItems="center"
        columnSpacing={1}
      >
        <Grid item xs></Grid>
        <MessageButton />
        <ProfileButton />
      </Grid>
    </Container>
  )
}
export default memo(AdminHeader);
