import {memo,useEffect} from 'react';
import {Routes,Route,useLocation}from'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {getAreaName} from "../Config/Route/";

import Provider from "./provider";
import AuthDialog from "./Auth/Screens/";
import Loading from "./Loading/";
import UploadImage from "./UploadImage/";
import UserPage from "./User/";
import AdminPage from "./Admin/";

function Screen({...props}){
	const location = useLocation();
	useEffect(function(){
	  document.documentElement.scrollTop = 0;
	},[location]);

	return(
		<Provider>
			<Loading />
			<UploadImage />
			<AuthDialog />
			<Routes>
			  <Route path={`*`} element={<UserPage />} />  
			  <Route path={`trang-quan-tri/*`} element={<AdminPage />} />
			  <Route path={`${getAreaName("admin")}/*`} element={<AdminPage />} />   
	        </Routes> 
	    </Provider>
	)
}
export default memo(Screen);
	    