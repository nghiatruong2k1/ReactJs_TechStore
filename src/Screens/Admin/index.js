import {memo,useContext,useEffect} from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import {Container,Grid,Stack} from '@mui/material/';
import styles from './styles.module.css';
import { useSnackbar} from "notistack";
import Header from "./Screens/Header/";
import Content from "./Screens/Content/";
import Menu from "./Screens/Menu/";
import Footer from "./Screens/Footer/";
function AdminPage({...props}){
  const {auth} = useContext(global.config.AppContext);
  const { enqueueSnackbar } = useSnackbar();
  const navigator = useNavigate();
  useEffect(() => {
    if(auth.state.user){
      if(auth.state.user.TypeId != 4){
        enqueueSnackbar({message:"Bạn không có quyền quản trị viên để tiếp tục!",type:"error"})
        navigator({
          pathname:"/"
        })
      }
    }else{
      auth.handle.open();
    }
  },[auth.state.user]);
  if(auth.state.user && auth.state.user.TypeId == 4){
    return(
      <Container component="section" className={styles.container} maxWidth="false" disableGutters>
        <Header className={styles.header}/>
        <Grid component="div" container className={styles.body}>
          <Grid item xs={2} className={clsx(styles.col,styles.left)}>
            <Stack className={styles.content}>        
              <Menu />
            </Stack>
          </Grid>
          <Grid item xs={10} className={styles.col}>
            <Stack className={styles.content}>        
              <Content />
              <Footer />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    )
  }else{
    return <></>
  }
}
export default memo(AdminPage);


/**
 * <Container component="section" className={styles.container} maxWidth="false" disableGutters>
        <Grid component="div" container className={styles.body}>
          <Grid item xs={2} className={clsx(styles.col,styles.left)}>
            <Logo />
            <Menu />
          </Grid>
          <Grid item xs={10} className={styles.col}>
            <Stack className={styles.right}>
              <Header />
              <Content />
              <Footer />
            </Stack>
          </Grid>
        </Grid>
      </Container>
 */