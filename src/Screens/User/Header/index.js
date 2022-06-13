import {memo,useState,useEffect,useRef} from 'react';
import {Box,Container,Paper} from '@mui/material/';
    
import NavContent from "./Screens/";
import { makeStyles } from '@mui/styles';
const bodyRoot = document.getElementById("root");
const useStyles = makeStyles((theme)=>{
  return {
    container:{
      color:`${theme.palette.text.paper} !important`,
      backgroundColor:`${theme.palette.background.paper} !important`
    }
  }}
);
function Header({...props}){
  const [isFixed,setFixed] = useState(false);
  const styles = useStyles();
  const thisRef = useRef();
  useEffect(function(){
    const heightTop = thisRef.current.offsetHeight;
    function handleScroll(event){
      let scrollTop = bodyRoot.scrollTop;
      if(scrollTop > 0){
        setFixed(true);
        thisRef.current.style.height = heightTop+"px";
      }else{
        setFixed(false);
        thisRef.current.style.height="auto";
      }
    }
    bodyRoot.addEventListener("scroll",handleScroll)
    return function(){
      bodyRoot.removeEventListener("scroll",handleScroll)
    }
  },[])
  return(
  <Box component="header" ref={thisRef}>
      <Container 
        maxWidth="xxl" 
        component={Paper} 
        className={styles.container}
        sx={{
          zIndex:10,
          position:{xs:"fixed",sm:(isFixed && "fixed" ) || "relative"},
          top:{xs:'unset',sm:(isFixed && 0) || 'unset'},
          bottom:{xs:0,sm:'unset'},
          left:0,right:0     
        }}
  >
        <NavContent fixed={isFixed} />
      </Container>
  </Box>
)}
export default memo(Header);

