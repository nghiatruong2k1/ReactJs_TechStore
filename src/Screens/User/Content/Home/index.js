import {memo,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import AsideTop from "./AsideTop/";
import DealsOffers from "./DealsOffers/";
import Brands from "./Brands/";
import Recommend from "./Recommend/";

function HomeContent({title,...props}){
  const location = useLocation();
  useEffect(function(){
    console.log(location)
    global.config.setTitleWebsite("");
  },[location])
  return(
    <>
      <AsideTop />
      <Brands />
      <DealsOffers />
      <Recommend />
    </>
  )
}
export default memo(HomeContent);
/*
      
      
*/