const {LocalStorage} = require('./Config/LocalStorage');
const {createContext} = require('react');
const {handler:NetlifyENV} = require('./Netlify/ENV');

const Context = createContext({});
const AppContext = createContext({});
const UserContext = createContext({});
const AdminContext = createContext({});


const ENV = NetlifyENV();

const WebsiteName = "TechStore";

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

module.exports = global.config ={
	WebsiteName:WebsiteName,
	setTitleWebsite:handleTitle,
	context:Context,
	AppContext:AppContext,
	UserContext:UserContext,
	AdminContext:AdminContext,
	LocalStorage:LocalStorage
}
