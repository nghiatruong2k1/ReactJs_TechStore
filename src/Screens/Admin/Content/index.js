import {memo,useEffect} from 'react';
import clsx from 'clsx';
import {Container,Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import{Routes,Route }from'react-router-dom';

import Dashboard from "./Dashboard/";
import Catalogs from "./Catalogs/";
function Content({...props}){
  return(
    <Container component="main" className={styles.main}>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/catalog/*" element={<Catalogs />} />
      </Routes>
    </Container>
  )
}
export default memo(Content);