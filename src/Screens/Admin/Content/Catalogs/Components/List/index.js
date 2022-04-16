import {memo,useEffect} from 'react';

import Provider from './provider';
import ListView from "./View/";
import ListHead from "./Head/";
function List({children,...props}){
  return(
    <Provider {...props}>
      <ListHead />
      {children}
      <ListView xs={12}/>
    </Provider>
  )
}
export default memo(List);