import {memo} from 'react';
import {Routes,Route,useLocation} from "react-router-dom";
import ProductsView from "./Products/";
import DetailView from "./Detail/";
function ProductContent({...props}){
  const location = useLocation();
  console.log({location})
  return(
    <Routes>
      <Route path="/category/:id" element={<ProductsView action="category" />} />
      <Route path="/brand/:id" element={<ProductsView action="brand"/>} />
      <Route path="/search/:query" element={<ProductsView action="search"/>} />
      <Route path="/detail/:id" element={<DetailView />} />
    </Routes>
  )
}
export default memo(ProductContent);