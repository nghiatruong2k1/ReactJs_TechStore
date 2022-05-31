import {formatDate}											from "../../../../../../../../Config/Format/";
export const initData= {
	
};
export function reducer(prevState,{key,payload}) {
	switch(key){
		case 'set':{
			return {
				...prevState,
				...payload
			}
		}
		default:{
		console.log(key,{prevState,"error"	:"Không tồn tại action"})
			return{
				...prevState
			}
		}
	}
};


export const displays = [
	{
      title	:"Mã",
      name	:"Id",
      type	:"text",
      style	:{
        minWidth:"5em"
      }
    },{
      title	:"Email",
      name	:"Email",
      type	:"text",
      style	:{
        minWidth:"20em"
      }
    },{
      title	:"Họ",
      name	:"FirstName",
      type	:"text",
      style	:{
         minWidth:"5em"
      }
    },{
      title	:"Tên",
      name	:"LastName",
      type	:"text",
      style	:{
         minWidth:"5em"
      }
    },{
    	title:"Địa chỉ",
    	name:"Location",
    	type:"text",
	    style:{
	        minWidth:"10em"
	    }
    },{
    	title:"Trạng thái",
    	name:"StatusName",
    	type:"text",
	    style:{
	        minWidth:"5em"
	    }
    },{
    	title:"Ngày đặt",
    	name:"CreateDate",
    	type:"datetime",
    	format:"shortdate",
	    style:{
	      minWidth:"5em"
	    }
    }
];