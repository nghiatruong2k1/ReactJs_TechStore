import {memo,useState,useMemo} from 'react';
import {Box,Grid,Stack,Drawer,Divider,Paper,Card,CardContent,useMediaQuery} from '@mui/material/';
import LeftNav from "./Screens/Left";
import RightNav from "./Screens/Right/";
import HeadNav from "./Screens/Head/";
import ToggleNav from "./Screens/Toggle";

import { makeStyles } from '@mui/styles';

const useDrawStyles = makeStyles((theme)=>{
  return {
    card:{
      color:`${theme.palette.text.default} !important`,
      backgroundColor:`${theme.palette.background.default} !important`
    },paper:{
      color:`${theme.palette.text.paper} !important`,
      backgroundColor:`${theme.palette.background.paper} !important`
    }
  }}
);

const DrawerNav = memo(function({open,onClose,children,...props}){
  const styles = useDrawStyles();
  return(
    <Drawer  anchor="right" open={open} onClose={onClose} {...props}>
      <Card component={Stack} className={styles.card} sx={{overflowX:'hidden',height:"100%",p:0.5}}>
        <HeadNav onClose={onClose}/>
        <CardContent  sx={{ flex:1,p:0.5,overflow:"hidden"}}>
          <Paper variant={"outlined"} className={styles.paper} sx={{height:"100%",overflowX:"hidden"}}>
            {children}
          </Paper>
        </CardContent>
      </Card>
    </Drawer>
  )
})
const BoxNav = memo(function({open,onClose,children,...props}){
  return(
    <Grid container {...props}>
      {children}
    </Grid>
  )
})
function Navbar({fixed,...props}){
  const [isOpen,setOpen] = useState(false);
  const isMd = useMediaQuery((theme)=>(theme.breakpoints.down("md")));
  const isFixed = useMemo(function(){
    return fixed || isMd
  },[fixed,isMd])
  return(
    <Grid item {...props}>
      {!isFixed && <Divider sx={{borderColor:'currentcolor !important'}}/>}
      <Box 
        component={isFixed && DrawerNav || BoxNav } 
        open={isOpen} 
        onClose={()=>(setOpen(false))}
      >
        <Stack component="nav" 
          direction={isFixed && "column" || "row"} 
          p={0.5}
          width={isFixed && "15em" || "100%"}
        >
          <LeftNav onClose={()=>(setOpen(false))} fixed={isFixed} justifyContent="flex-start"/>
          <RightNav onClose={()=>(setOpen(false))} fixed={isFixed} justifyContent="flex-end"/>
        </Stack>
      </Box>
      {isFixed && <ToggleNav onClick={()=>(setOpen(true))}/>}
    </Grid>
  )
}
export default memo(Navbar);