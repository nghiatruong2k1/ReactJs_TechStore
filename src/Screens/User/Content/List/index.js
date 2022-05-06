import {memo} from 'react';
import clsx from 'clsx';
import {Routes,Route} from "react-router-dom";
import ListView from "./ListView/";

import {getActionName} from "../../../../Config/Route/";


function List({controller,...props}){
  return(
    <Routes>
      <Route path={`${getActionName("user",controller,"index")}`} 
        element={<ListView controller={controller} />} />
      <Route path={`${getActionName("user",controller,"search")}`} 
        element={<ListView controller={controller} action="search" />} />
    </Routes>
  )
}
export default memo(List);