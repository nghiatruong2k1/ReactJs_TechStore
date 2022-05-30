import {memo,useEffect} from 'react';
import {Routes,Route,useLocation}from'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Provider from "./AppProvider";
import {getAreaName} from "./Config/Route/";
import Auth from "./Screens/Auth/";
import LoadingData from "./Screens/Loading/";
import UploadImage from "./Screens/UploadImage/";
import UserPage from "./Screens/User/";
import AdminPage from "./Screens/Admin/";

function App({...props}){
	const location = useLocation();

	useEffect(function(){
	  document.documentElement.scrollTop = 0;
	},[location]);

	return(
		<Provider>
			<LoadingData />
			<Auth />
			<Routes>
	          
			  <Route path={`${getAreaName("admin")}*`} element={<AdminPage />} />   
	        </Routes> 
	    </Provider>
	)
}
export default memo(App);
	        
/*
<Route path={`${getAreaName("user")}/*`} element={<UserPage />} />   
	        
	        <UploadImage />
	     	              
			*/