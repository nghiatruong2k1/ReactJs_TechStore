export const initData                  = {
	
};
export function reducer(prevState,{key,payload}) {
	switch(key){
		case 'set'                         :{
			return {
				...prevState,
				...payload
			}
		}
		default                            :{
		console.log(key,{prevState,"error" :"Không tồn tại action"})
			return{
				...prevState
			}
		}
	}
};


export const displays                  = [
    {
      title                            :"Hình ảnh",
      name                             :"ImageUrl",
      type                             :"image",
      style                            :{
        minWidth                       :"10em"
      }
    },{
      title                            :"Tên",
      name                             :"Name",
      type                             :"text",
      style                            :{
        minWidth                       :"20em"
      }
    },{
      title                            :"Thứ tự",
      name                             :"OrderIndex",
      type                             :"number",
      format                           :[3,0],
      style                            :{
        minWidth                          :"5em"
      }
    }
];