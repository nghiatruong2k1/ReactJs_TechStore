import {memo,useMemo,useEffect,useState} from 'react';
import {Box,Grid,Stack,Drawer,Divider,Card,CardContent} from '@mui/material/';
import LeftNav from "./Screens/Left";
import RightNav from "./Screens/Right/";
import HeadNav from "./Screens/Head/";
import ToggleNav from "./Screens/Toggle";

const DrawerNav = memo(function({open,onClose,children,...props}){
  return(
    <Drawer  anchor="right" open={open} onClose={onClose} {...props}>
      <Card component={Stack} sx={{overflowX:'hidden',height:"100%"}}>
        <HeadNav onClose={onClose}/>
        <Divider />
        <CardContent sx={{ flex:1,overflowX:'hidden',p:0.5 }}>
          {children}
        </CardContent>
        <Divider />
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
  return(
    <Grid item {...props}>
      {!fixed && <Divider />}
      <Box component={ fixed && DrawerNav || BoxNav } open={isOpen} onClose={()=>(setOpen(false))}>
        <Stack component="nav" 
          direction={fixed && "column" || "row"} 
          width={fixed && "15em" || "100%"}
          p={1}
        >
          <LeftNav onClose={()=>(setOpen(false))} fixed={fixed} justifyContent="flex-start"/>
          <RightNav onClose={()=>(setOpen(false))} fixed={fixed} justifyContent="flex-end"/>
        </Stack>
      </Box>
      {fixed && <ToggleNav onClick={()=>(setOpen(true))}/>}
    </Grid>
  )
}
export default memo(Navbar);