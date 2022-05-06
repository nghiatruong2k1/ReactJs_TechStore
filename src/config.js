const {LocalStorage} = require('./Config/LocalStorage');
const {createContext} = require('react');
const AppContext = createContext({});
const UserContext = createContext({});
const AdminContext = createContext({});
const Base_Url_API = "https://localhost:44373/";
const WebsiteName = "TechStore";

function handleSetitle(title){
	if(title && title !== ""){
		document.title = WebsiteName+" - "+title;
	}else{
		document.title = WebsiteName;
	}
}


module.exports = global.config ={
	Base_Url_API:Base_Url_API,
	WebsiteName:WebsiteName,
	setTitleWebsite:handleSetitle,
	context:AppContext,
	UserContext:UserContext,
	AdminContext:AdminContext,
	LocalStorage:LocalStorage
}