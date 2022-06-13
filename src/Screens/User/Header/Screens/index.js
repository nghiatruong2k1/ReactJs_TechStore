import {memo} from 'react';
import {Grid} from '@mui/material/';


import HeaderLogo from "./Logo/";
import HeaderSearch from "./Search/";
import HeaderLogin from "./Login/";
import HeaderCart from "./Cart/";
import HeaderProfile from "./Profile/";
import HeaderMessage from "./Message/";
import HeaderOrder from "./Order/";
import HeaderNavbar from "./Navbar/"; 

function NavContent({fixed,...props}){
return (
    <Grid container py={0.5} spacing={1} alignItems="center">
        <HeaderLogo 
          xs 
          sm={3} 
          md={(fixed && 1.5) || 2} 
          lg={(fixed && 1.2) || 1.5}
        />
        <Grid item xs sx={{display:{xs:"none",sm:"block"}}}/>
        <HeaderSearch fixed = {fixed} xs sm={1.4} md={(fixed && 5.5) || 5}/>
        <HeaderLogin xs sm={1.4} md={1}/>
        <HeaderProfile xs sm={1.4} md={1}/>
        <HeaderMessage xs sm={1.4} md={1}/> 
        <HeaderCart xs sm={1.4} md={1}/>
        <HeaderOrder xs sm={1.4} md={1}/>
        <HeaderNavbar fixed={fixed} xs sm={1.4} md={(fixed && 1 ) || 12}/>
    </Grid>
)
};
export default memo(NavContent)
