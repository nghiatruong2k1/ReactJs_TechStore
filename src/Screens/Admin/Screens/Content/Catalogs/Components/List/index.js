import {memo} from 'react';

import Provider from './provider';
import ListView from "./View/";
import ListHead from "./Head/";
function List({children,...props}){
  return(
    <Provider {...props}>
      <ListHead />
      {children}
      <ListView />
    </Provider>
  )
}
export default memo(List);