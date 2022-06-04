import {formatDate} from "../../../../../../../../../Config/Format/";
export const displays = [
	{
      title:"Mã",
      key:"Id",
      type:"text",
      style:{
        minWidth:"5em"
      }
    },{
      title:"Email",
      key:"Email",
      type:"text",
      style:{
        minWidth:"20em"
      }
    },{
      title:"Họ",
      key:"FirstName",
      type:"text",
      style:{
        width:"5em"
      }
    },{
      title:"Tên",
      key:"LastName",
      type:"text",
      style:{
        width:"5em"
      }
    },{
    	title:"Địa chỉ",
    	key:"Location",
    	type:"text",
	    style:{
	        width:"10em"
	    }
    },{
    	title:"Trạng thái",
    	key:"StatusName",
    	type:"text",
	    style:{
	        width:"5em"
	    }
    },{
    	title:"Ngày đặt",
    	key:"CreateDate",
    	type:"text",
    	format:function(value){
    		return formatDate(value)
    	},
	    style:{
	        width:"5em"
	    }
    }
];