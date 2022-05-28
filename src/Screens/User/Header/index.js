import {memo,useState,useEffect} from 'react';
import {Box,Container,Paper} from '@mui/material/';
    
import NavContent from "./Screens/";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>{
  return {
    container:{
      color:theme.palette.text.paper,
      backgroundColor:theme.palette.background.paper
    }
  }}
);
function Header({...props}){
  const [isFixed,setFixed] = useState(false);
  const styles = useStyles();
  useEffect(function(){
    document.addEventListener("scroll",function(event){
      let scrollTop = document.documentElement.scrollTop;
      if(scrollTop > 0){
        setFixed(true)
      }else{
        setFixed(false)
      }
    })
  },[])
  return(
  <Box component="header"
    sx={{
      zIndex:10,
      position:isFixed && "fixed" || "relative",
      top:isFixed && 0 || 'unset',
      left:0,right:0     
    }}
  >
      <Container maxWidth="xxl" component={Paper} className={styles.container}>
        <NavContent fixed={isFixed} />
      </Container>
  </Box>
)}
export default memo(Header);

