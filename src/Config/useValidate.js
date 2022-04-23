import {useMemo} from "react";


const validates = (function(){
	return {
		isRequired:function(value,props){
			const [message] = props;
			if(((typeof(value) === 'string') && (value.trim() !== ""))
				|| ((typeof(value) === 'number') && (!Number.isNaN(value)))
				|| ((typeof(value) === 'boolean') && value)
			){
				return "";
			}
			return message || "Vui lòng nhập trường này!"
		},isEmail:function(value,props){
			const [message,args] = props
			const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(typeof(value) === 'string'){
				if(regex.test(value)){
					if(Array.isArray(args)){
						const argsRegex = new RegExp("@("+args.join("|")+")$");
						if(argsRegex.test(value)){
							return "";
						}
					}else {
						return "";
					}
				}
			}			
			return message || "Định dạng Email không hợp lệ!";
		},isConfirm:function(value,props,values){
			const [reKey,message] = props;
			let reValue = reKey
			if(values && typeof(values) == 'object'){
				reValue = values[reKey]
			}
			if(value !== reValue){
					return message || "Giá trị không hợp lệ!";
			}
			return ""
		},isRegex:function(value,props){
			const [regex,message] = props
			if(typeof(regex) === "object" && typeof(regex.test) === "function"){
				if(regex.test(value)){
					return ""
				}			
				return message || "Định dạng dữ liệu không hợp lệ!";
			}else{
				return message || "Định dạng Regex không hợp lệ!";
			}
		},minLength:function(value,props){
			const [length,message] = props
			switch (typeof(value)) {
				case "number":{
					value=value+"";
				}
				case "string":{
 					if(value.trim().length < length){
						return message && message.replaceAll("{1}",length) || `Vui lòng nhập lớn hơn ${length} kí tự!`;
					}
					return "";
				}
				default:
					break;
			}
			return "Kiểu dữ liệu không hợp lệ (chỉ nhận chuỗi hoặc số)";
		},maxLength:function(value,props){
			const [length,message] = props
			switch (typeof(value)) {
				case "number":{
					value=value+"";
				}
				case "string":{
 					if(value.trim().length > length){
						return message && message.replaceAll("{1}",length) || `Vui lòng nhập nhỏ hơn ${length} kí tự!`;
					}
					return "";
				}
				default:
					break;
			}
			return "Kiểu dữ liệu không hợp lệ (chỉ nhận chuỗi hoặc số)";
		},rangeLength:function(value,props){
			const [minL,maxL,message] = props
			switch (typeof(value)) {
				case "number":{
					value=(value+"").trim();
				}
				case "string":{
 					if((value.length < minL) || (value.length > maxL)){
						return message && message.replaceAll("{1}",minL).replaceAll("{2}",maxL) || `Vui lòng nhập từ ${minL} đên ${maxL} kí tự!`
					}
					return "";
				}
				default:
					break;
			}
			return "Kiểu dữ liệu không hợp lệ (chỉ nhận chuỗi hoặc số)";
		}
		,minNumber:function(value,props){
			const [num,message] = props
			switch (typeof(value)) {
				case "string":{
 					value = Number(value);
 					if(Number.isNaN(value));{
 						break;
 					}
				}
				case "number":{
					if(value < num){
						return message && message.replaceAll("{1}",num) || `Vui lòng nhập lớn hơn ${num}!`
					}
					return "";
				}
				default:					
					break;
			}
			return "Kiểu dữ liệu không hợp lệ (chỉ nhận số)";
			
		},maxNumber:function(value,props){
			const [num,message] = props
			switch (typeof(value)) {
				case "string":{
 					value = Number(value);
 					if(Number.isNaN(value));{
 						break;
 					}
				}
				case "number":{
					if(value > num){
						return message && message.replaceAll("{1}",num) || `Vui lòng nhập nhỏ hơn ${num}!`
					}
					return "";
				}
				default:					
					break;
			}
			return "Kiểu dữ liệu không hợp lệ (chỉ nhận số)";
		},rangeNumber:function(value,props){
			const [minN,maxN,message] = props		
			switch (typeof(value)) {
				case "string":{
 					value = Number(value);
 					if(Number.isNaN(value));{
 						break;
 					}
				}
				case "number":{
					if((value < minN) || (value > maxN)){
						return message && message.replaceAll("{1}",minN).replaceAll("{2}",maxN) || `Vui lòng nhập trong khoảng ${minN} đến ${maxN}!`
					}
					return "";
				}
				default:					
					break;
			}
			return "Kiểu dữ liệu không hợp lệ (chỉ nhận số)";
		}
	}
}());
function checkObject(values,rulerValues,setValid){
		return Object.keys(rulerValues).reduce(function(result,key){	
			const valids = Object.keys(rulerValues[key]).reduce(function(mess,ruler){
				if(validates.hasOwnProperty(ruler)){
					const mes = validates[ruler](values[key],rulerValues[key][ruler],values);
					if(mes != ""){
						mess.push(mes)
					}
				}
				return mess
			},[]);
			if(valids.length > 0){
				result+=1;
			}
			setValid(key,valids[0])
			return result
		},0);
}
export const useValidate = function(){
	return useMemo(function(){	
		return {checkObject,validates}
	},[])
}
