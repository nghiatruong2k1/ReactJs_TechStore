export const initState = {
	enableEdit:false
};
export const initCase = {

};
export function reducerState(prevState,[key,payload]){
    switch(key){
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

// export function reducerDisplay(prevState,[key,payload]) {
// 	switch(key){
// 		case 'toggle_show':{
// 			payload.hidden = !payload.hidden;
// 			return[...prevState]
// 		}
// 		default:{
// 		console.log(key,{prevState,"error":"Không tồn tại action"})
// 			return [...prevState]
// 		}
// 	}
// };

