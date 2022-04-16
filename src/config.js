const {useFetch} = require('./CustomHook/Fetch/');
const {createContext} = require('react');
const {createSearchParams} = require('react-router-dom');
const AppContext = createContext({});
const UserContext = createContext({});
const AdminContext = createContext({});
const Base_Url_API = "https://localhost:44373/";
const WebsiteName = "TechStore";

const LocalStorage = (function(){
    return {
        get(key,initData){
            return JSON.parse(localStorage.getItem(key)) ?? initData ?? undefined;
        },
        set(key,value){
            localStorage.setItem(key,JSON.stringify(value));
        },
        delete(key){
            localStorage.delete(key)
        }
    };
}());


function handleSetitle(title){
	if(title && title != ""){
		document.title = this.WebsiteName+" - "+title;
	}else{
		document.title = this.WebsiteName;
	}
}
function convertAlias(str){
	let newStr = str
				.toLowerCase()
				.replace(/\s{1,}/g,"-")
				.replace(/[àáảãạâấầẩẫậăắằẳẵặ]/g,"a")
				.replace(/[èéẻẽẹêếềểễệ]/g,"e")
				.replace(/[íìỉĩị]/g,"i")
				.replace(/[óòỏõọôốồổỗộơớờởỡợ]/g,"o")
				.replace(/[úùủũụưứừửữự]/g,"u")
				.replace(/[ýỳỷỹỵ]/g,"y")
				.replace(/[đ]/g,"d")
		return newStr;
}
function formatNumber(number,n, x) {
	if(typeof(number) != "number"){
		return 0;
	}
	if(typeof(n) != "number"){
		n = 0;
	}
	if(typeof(x) != "number"){
		x = 0;
	}
    let re = '\\d(?=(\\d{' + (n || 3) + '})+' + (x > 0 ? '\\.' : '$') + ')';
    return number.toFixed(Math.max(0, ~~x)).replace(new RegExp(re, 'g'), '$&,');
}
function formatByte(x){
		const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		let l = 0, n = parseInt(x, 10) || 0;
		while(n >= 1024 && ++l){
		    n = n/1024;
		}
		return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
	}
function formatBase64(file) {
	  return new Promise((resolve, reject) => {
	    const reader = new FileReader();
	    reader.readAsDataURL(file);
	    reader.onload = (e) => resolve(e.target.result);
	    reader.onerror = error => reject(error);
	  });
	}
function formatDate(date,strFormat) {
		  const ndate = new Date(date);
		  return ndate.toLocaleString();
}
const route = {
	user:{
		product:{
			detail:"/chi-tiet-san-pham",
			category:"/danh-muc-san-pham",
			brand:"/thuong-hieu-san-pham",
			search:"/tim-kiem-san-pham"
		},
		category:{
			index:"/danh-sach-danh-muc",
			search:"/tim-kiem-danh-muc"
		},
		brand:{
			index:"/danh-sach-thuong-hieu",
			search:"/tim-kiem-thuong-hieu"
		}
	}
}


module.exports = global.config ={
	Base_Url_API:Base_Url_API,
	WebsiteName:WebsiteName,
	context:AppContext,
	UserContext:UserContext,
	AdminContext:AdminContext,
	useFetch:useFetch,
	LocalStorage:LocalStorage,
	setTitleWebsite:handleSetitle,
	convertAlias:convertAlias,
	formatNumber:formatNumber,
	formatDate:formatDate,
	formatByte:formatByte,
	fileToBase64:formatBase64,
	route:route
}