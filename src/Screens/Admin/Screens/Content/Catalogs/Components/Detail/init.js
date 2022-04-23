import {createContext} from "react";
export const DetailContext = createContext({});
export const initData = {
	data:{},
	valids:{},
	isLoading:false
};
export function reducer(prevState,{key,payload}) {
	switch(key){
		case 'set':{
			return {
				...prevState,
				...payload
			}
		}
		case 'set_valid':{
			return {
				...prevState,
				valids:{
					...prevState.valids,
					...payload
				}
			}
		}
		case 'change':{
			if(payload["Name"]){
				prevState.data.Alias = global.config.convertAlias(payload["Name"])
			}
			return{
				...prevState,
				data:{
					...prevState.data,
					...payload
				}
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
