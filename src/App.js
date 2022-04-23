import './App.css';

import {useEffect,Component} from "react";
import {Routes,Route}from'react-router-dom';
import AppProvider from "./AppProvider";

import UserPage from "./Screens/User/";
import AdminPage from "./Screens/Admin/";
import LoadingData from "./Screens/LoadingData/";
import Toasts from "./Screens/Toasts/";
import Auth from "./Screens/Auth/";


function App() {
  useEffect(function(){
    global.config.setTitleWebsite("");
  },[]);
  const {getAreaName} = global.config.useRoute();
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
