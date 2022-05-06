import {memo,useEffect} from 'react';
import {useLocation} from "react-router-dom";
import "./bootstrap.css";
import "./ui.css";

import Provider from "./provider";
import Header from "./Header/";
import Content from "./Content/";
import Footer from "./Footer/";
import Subscribe from "./Subscribe/";
import Cart from "./Cart/";
function UserPage({...props}){
  const location = useLocation();
  useEffect(function(){
    document.documentElement.scrollTop = 0;
  },[location])
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