export const initState = {
  limit: 5,
  page: 1,
  // sort:null,
  // filter:{},
  // enableEdit:false,
  inTrash: false,
};
export const initCase = {
  TOGGLE_TRASH: '[TOGGLE_TRASH,?bool]',
  SET_PAGE: '[SET_PAGE,?num]',
  CALLBACK: '[CALLBACK,?func]',
  RESET: '[RESET,?object]',
};
function getTrash(payload, inTrash) {
  return typeof payload === 'boolean' ? payload : inTrash || false;
}
function getPage(payload) {
  return payload > 1 ? payload : 1;
}
export function reducerState(prevState, [key, payload]) {
  switch (key) {
    case initCase.TOGGLE_TRASH: {
      if (payload !== prevState.inTrash) {
        return {
          ...prevState,
          inTrash: getTrash(payload, !prevState.inTrash),
        };
      }
      break;
    }
    case initCase.SET_PAGE: {
      if (payload !== prevState.page) {
        return {
          ...prevState,
          page: getPage(payload),
        };
      }
      break;
    }
    case initCase.CALLBACK: {
      if (payload && typeof payload === 'function') {
        payload(prevState);
      }
      break;
    }
    default: {
      console.log(`không tôn tại case`, key, initCase);
    }
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
