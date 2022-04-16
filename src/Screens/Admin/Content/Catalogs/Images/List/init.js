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
      title:"Image",
      key:"Url",
      type:"image",
      style:{
        minWidth:"15em"
      }
    },{
      title:"Name",
      key:"Name",
      type:"text",
      style:{
        minWidth:"20em"
      }
    },{
      title:"Size",
      key:"Size",
      type:"text",
      style:{
        width:"8em"
      },format:(value)=>{
      	return global.config.formatByte(value)
      }
    }
];