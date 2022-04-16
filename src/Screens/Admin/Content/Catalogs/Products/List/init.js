export const initData = {
	
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
		console.log(key,{prevState,"error":"Không tồn tại action"})
			return{
				...prevState
			}
		}
	}
};


export const displays = [
    {
      title:"Hình ảnh",
      key:"ImageUrl",
      type:"image",
      style:{
        minWidth:"15em"
      }
    },{
      title:"Tên",
      key:"Name",
      type:"text",
      style:{
        minWidth:"10em"
      }
    },{
      title:"Giá",
      key:"Price",
      type:"text",
      format:(value)=>{
        return global.config.formatNumber(value)
      },
      style:{
        minWidth:"8em"
      }
    },{
      title:"Khuyến mãi",
      key:"SalePrice",
      type:"text",
      format:(value)=>{
        return global.config.formatNumber(value)
      },
      style:{
        minWidth:"8em"
      }
    },{
      title:"Danh mục",
      key:"CategoryName",
      type:"text",
      style:{
        width:"10em"
      }
    },{
      title:"Thương hiệu",
      key:"brandName",
      type:"text",
      style:{
        width:"10em"
      }
    },{
      title:"Type",
      key:"TypeName",
      type:"text",
      style:{
        width:"10em"
      }
    },{
      title:"Ngày tạo",
      key:"CreateDate",
      type:"text",
      style:{
        width:"max-content"
      },format:(value)=>{
        if(value){
          let date = new Date(value);
          return date.toLocaleString('en-US');
        }
      },
    },{
      title:"Ngày sửa",
      key:"UpdateDate",
      type:"text",
      style:{
        width:"max-content"
      },format:(value)=>{
        if(value){
          let date = new Date(value);
          return date.toLocaleString('en-US');
        }
      }
    }
];