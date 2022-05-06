import './App.css';

import {useEffect} from "react";
import {Routes,Route}from'react-router-dom';
import AppProvider from "./AppProvider";

import Auth from "./Screens/Auth/";
import LoadingData from "./Screens/LoadingData/";
import Toasts from "./Screens/Toasts/";
import UserPage from "./Screens/User/";
import AdminPage from "./Screens/Admin/";
import {getAreaName} from "./Config/Route/";

function App() {
  useEffect(function(){
    global.config.setTitleWebsite("");
  },[]);
  return (
      <AppProvider>
        <LoadingData />
        <Toasts />
        <Auth />
        <Routes>
          <Route path={`${getAreaName("user")}/*`} element={<UserPage />} /> 
          <Route path={`${getAreaName("admin")}*`} element={<AdminPage />} />     
        </Routes>  
      </AppProvider>
  );
}

export default App;
/*




        
        
      
        
*/