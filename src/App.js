import './App.css';

import {useEffect} from "react";
import {Routes,Route}from'react-router-dom';
import AppProvider from "./AppProvider";

import UserPage from "./Screens/User/";
import AdminPage from "./Screens/Admin/";
import LoadingData from "./Screens/LoadingData/";
import UploadImage from "./Screens/UploadImage/";
import Toasts from "./Screens/Toasts/";
import Auth from "./Screens/Auth/";
function App() {
  useEffect(function(){
    global.config.setTitleWebsite("");
  },[]);
  return (
      <AppProvider>
        <LoadingData />
        <UploadImage />
        <Toasts />
        <Auth />
        <Routes>
          <Route path="/*" element={<UserPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </AppProvider>
  );
}

export default App;
