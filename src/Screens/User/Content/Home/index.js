import {memo,useEffect} from 'react';

import AsideTop from "./AsideTop/";
import DealsOffers from "./DealsOffers/";
import Recommend from "./Recommend/";
function HomeContent({...props}){
  useEffect(function(){
    global.config.setTitleWebsite("");
  },[])
  return(
    <>
      <AsideTop />
      <DealsOffers />
      <Recommend />
    </>
  )
}
export default memo(HomeContent);