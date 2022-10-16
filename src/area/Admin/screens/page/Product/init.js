export const initState = {
	limit:5,
	page:1,
	data:[],
	total:0,
	sort:null,
	filter:{},
	isLoading:false,
	enableEdit:false,
	inTrash:false
};
export const initCase = {
    SET_DATA:'[SET_DATA,?array]',
    TOGGLE_LOADING:'[TOGGLE_LOADING,?bool]',
    SET_TOTAL:'[SET_TOTAL,?num]',
    SET_PAGE:'[SET_PAGE,?num]',
    RESET:'[RESET,?object]'

};
export function reducerState(prevState,[key,payload]){
    switch(key){
        case initCase.SET_DATA:{
            if(payload !== prevState.data){
                return {
                    ...prevState,
                    data:(Array.isArray(payload) && payload) || Array(prevState.limit).fill({})
                }; 
            }
            break;
        }
        case initCase.TOGGLE_LOADING:{
            if (payload !== prevState.isLoading) {
                return {
                  ...prevState,
                  isLoading: typeof payload === 'boolean' ? payload : !prevState.isLoading,
                };
              }
            break;
        }
        case initCase.SET_TOTAL:{
            if (payload !== prevState.total) {
                return {
                  ...prevState,
                  total:payload > 0 ? payload : 0,
                };
              }
            break;
        }
        case initCase.SET_PAGE:{
            if (payload !== prevState.page) {
                return {
                  ...prevState,
                  page:payload > 1 ? payload : 1,
                };
              }
            break;
        }
        case initCase.RESET:{
            if(payload){
                return {...prevState,...payload}
            }else{
                return {...prevState}
            }
        }
        default:{
            console.log(`không tôn tại case`,key,initCase)
        }
    }
    return prevState
};

// export function r(prevState,[key,payload]) {
// 	switch(key){
// 		case 'add_data':{
// 			return{
// 				...prevState,
// 				datas:[payload,...prevState.datas]
// 			}
// 		}
// 		case 'remove_data':{
// 			return{
// 				...prevState,
// 				datas:prevState.datas.filter(function(data,index){
// 					return data != payload
// 				})
// 			}
// 		}
// 		case 'change_data':{
// 			return{
// 				...prevState,
// 				datas:prevState.datas.map(function(data,index){
// 					return {
// 						...data
// 					}
// 				})

// 			}
// 		}
// 		case 'set_edit':{
// 			return {
// 				...prevState,
// 				enableEdit:Boolean(payload)
// 			}
// 		}
// 		case 'set_sort':{
// 			const [name,desc] = payload;
// 			const newSort = name + (desc && '_Desc' || "");
// 			return {
// 				...prevState,
// 				sort: newSort != prevState.sort ? newSort : null
// 			}
// 		}
// 		case 'change_filter':{
// 			return {
// 				...prevState,
// 				filter:{
// 					...prevState.filter,
// 					...payload
// 				}
// 			}
// 		}
// 		case 'set_trash':{
// 			return {
// 				...prevState,
// 				inTrash:Boolean(payload)
// 			}
// 		}
// 		case 'reset':{
// 			return {
// 				...initData
// 			}
// 		}
// 		default:{
// 		console.log(key,{prevState,"error":"Không tồn tại action"})
// 			return{
// 				...prevState
// 			}
// 		}
// 	}
// };



