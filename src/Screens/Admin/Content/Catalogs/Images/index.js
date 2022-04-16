import {memo} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import{Routes,Route }from'react-router-dom';
import ImageList from "./List/";
import ImageAdd from "./Add/";
import ImageUpdate from "./Update/";
function CatalogImage({...props}){
  return(
      <Routes>
        <Route path="*" element={<ImageList />} />
        <Route path="/add/*" element={<ImageAdd />} />
        <Route path="/update/:id*" element={<ImageUpdate />} />
      </Routes>
  )
}
export default memo(CatalogImage);