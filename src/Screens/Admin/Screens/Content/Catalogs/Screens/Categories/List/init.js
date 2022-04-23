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
        minWidth:"20em"
      }
    },{
      title:"Thứ tự",
      key:"OrderIndex",
      type:"text",
      style:{
        width:"5em"
      }
    }
];