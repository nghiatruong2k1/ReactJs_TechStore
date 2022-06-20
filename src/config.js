const {LocalStorage} = require('./Config/LocalStorage');
const {createContext} = require('react');

const Context = createContext({});
const AppContext = createContext({});
const UserContext = createContext({});
const AdminContext = createContext({});
const WebsiteName = process.env.REACT_APP_WEBSITE_NAME || "TechStore";

const handleTitle = (function(){
	document.title = WebsiteName;
	return function(title){
		if(title && title !== ""){
			document.title = WebsiteName+"|"+title;
		}else{
			document.title = WebsiteName;
		}
	}
})();
console.log(process.env)
module.exports = global.config ={
	WebsiteName:WebsiteName,
	setTitleWebsite:handleTitle,
	context:Context,
	AppContext:AppContext,
	UserContext:UserContext,
	AdminContext:AdminContext,
	LocalStorage:LocalStorage
}
