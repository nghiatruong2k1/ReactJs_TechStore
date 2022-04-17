import {memo,useEffect} from 'react';
import {useLocation} from "react-router-dom";
import "./bootstrap.css";
import "./ui.css";

import Provider from "./provider";
import Header from "./Header/";
import Content from "./Content/";
import Footer from "./Footer/";
import Subscribe from "./Subscribe/";
import Carts from "./Carts/";
function UserPage({...props}){
  const location = useLocation();
  useEffect(function(){
    document.documentElement.scrollTop = 0;
  },[location])
  return(
    <Provider>
      <Header />
      <Content />
      <Subscribe />
      <Footer />
      <Carts />
    </Provider>
  )
}
export default memo(UserPage);