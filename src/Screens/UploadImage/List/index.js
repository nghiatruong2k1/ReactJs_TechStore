import {memo,useReducer} from 'react';
import clsx from 'clsx';
import {Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import {initData,reducer} from "./init";
import Provider from "./provider";
import ListView from "./View/";
import ListPaging from "./Paging/";
function UploadImageList({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
    <Provider state={state} dispath={dispath}>
      <ListView />
      <ListPaging />
    </Provider>
  )
}
export default memo(UploadImageList);