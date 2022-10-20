export const initState = (displays) => {
  return displays.reduce((rs, i) => {
    rs[i.name] = true;
    return rs;
  }, {});
};
export const initCase = {};
export function reducerState(prevState, [name, show]) {
  if (prevState[name] !== undefined) {
    prevState[name] = Boolean(show);
    return {
      ...prevState,
    };
  }
  return prevState;
}

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
