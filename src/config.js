const {useFetch} = require('./CustomHook/Fetch/');

const {convertAlias} = require('./Config/convertAlias');
const {formatBase64} = require('./Config/formatBase64');
const {formatByte} = require('./Config/formatByte');
const {formatDate} = require('./Config/formatDate');
const {formatNumber} = require('./Config/formatNumber');
const {LocalStorage} = require('./Config/LocalStorage');
const {useRoute} = require('./Config/useRoute');


const {createContext} = require('react');
const {createSearchParams} = require('react-router-dom');

const AppContext = createContext({});
const UserContext = createContext({});
const AdminContext = createContext({});
const Base_Url_API = "https://localhost:44373/";
const WebsiteName = "TechStore";

function handleSetitle(title){
	if(title && title != ""){
		document.title = this.WebsiteName+" - "+title;
	}else{
		document.title = this.WebsiteName;
	}
}


module.exports = global.config ={
	Base_Url_API:Base_Url_API,
	WebsiteName:WebsiteName,
	context:AppContext,
	UserContext:UserContext,
	AdminContext:AdminContext,
	LocalStorage:LocalStorage,
	setTitleWebsite:handleSetitle,
	convertAlias:convertAlias,
	formatNumber:formatNumber,
	formatDate:formatDate,
	formatByte:formatByte,
	fileToBase64:formatBase64,
	useFetch:useFetch,
	useRoute:useRoute
}