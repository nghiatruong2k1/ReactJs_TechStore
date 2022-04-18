import {memo} from 'react';
import {Grid,Stack} from '@mui/material/';

import CartButton from "./Cart/";
import ProfileButton from "./Profile/";
import MessageButton from "./Message/";
import OrderButton from "./Order/";
import LoginButton from "./Login/";
function HeaderOption({...props}){
  return(
    <Grid item {...props}>
      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <ProfileButton />
        <LoginButton />
        <MessageButton />
        <OrderButton />
        <CartButton />
      </Stack>
    </Grid>
  )
}
export default memo(HeaderOption);