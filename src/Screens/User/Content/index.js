import {memo} from 'react';
import {Box,Container} from '@mui/material/';
import styles from './styles.module.css';

import {Routes,Route} from "react-router-dom";
import HomeContent from "./Home/"
import ProductContent from "./Product/"
import ListContent from "./List/"
import CartContent from "./Cart/"
import ProfileContent from "./Profile/"
import ProductsView from "./Product/Products/";
import DetailView from "./Product/Detail/";
function Content({...props}){

  const {getRoute} = global.config.useRoute();

  return(
    <Box component="section" className={styles.section}  mt={3} >
      <Container maxWidth="xxl" component="main"className={styles.main}>
        <Routes>
          <Route path="/*" element={<HomeContent />} />
          <Route path={`${getRoute("user","category","index")}/*`} 
            element={<ListContent action="category" title="Danh mục" />} />
          <Route path={`${getRoute("user","brand","index")}/*`} 
            element={<ListContent action="brand" title="Thương hiệu" />} />

          <Route path={`${getRoute("user","product","category")}/:alias`} 
            element={<ProductsView action="category" />} />
          <Route path={`${getRoute("user","product","brand")}/:alias`} 
            element={<ProductsView action="brand"/>} />
          <Route path={`${getRoute("user","product","search")}/:query`} 
            element={<ProductsView action="search"/>} />
          <Route path={`${getRoute("user","product","detail")}/:alias`}
            element={<DetailView />} />
          }

          
          <Route path="/cart/*" element={<CartContent />} />
          <Route path="/profile/*" element={<ProfileContent />} />
        </Routes>
      </Container>
    </Box>
  )
}
export default memo(Content);