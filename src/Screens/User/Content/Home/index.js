import {memo,useEffect} from 'react';

import AsideTop from "./AsideTop/";
import DealsOffers from "./DealsOffers/";
import Brands from "./Brands/";
import Recommend from "./Recommend/";

function HomeContent({title,...props}){
  useEffect(function(){
    global.config.setTitleWebsite(title);
  })
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