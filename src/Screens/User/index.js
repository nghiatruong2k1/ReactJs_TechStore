import {memo} from 'react';

import Provider from "./provider";
import Header from "./Header/";
import Content from "./Content/";
import Footer from "./Footer/";
import Subscribe from "./Subscribe/";
import Cart from "./Cart/";
function UserPage({...props}){
  return(
    <Provider>
      <Header /> 
      <Cart />
      <Content />
      <Subscribe />
      <Footer />
    </Provider>
  )
}
export default memo(UserPage);
/*

    
       

*/