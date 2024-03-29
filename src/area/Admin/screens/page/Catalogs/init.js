export const initState = ({ limit, page, inTrash }) => {
  return {
    limit: getLimit(limit),
    page: getPage(page),
    inTrash: getTrash(inTrash, false),
    // sort:null,
    // filter:{},
    // enableEdit:false,
  };
};
function getTrash(payload, inTrash) {
  if (typeof payload === 'string') {
    payload = !!JSON.parse(String(payload).toLowerCase());
  }

  return typeof payload === 'boolean' ? payload : inTrash || false;
}
function getPage(payload) {
  payload = Number(payload)
  return payload > 1 ? payload : 1;
}
function getLimit(payload) {
  payload = Number(payload)
  return payload > 0 ? payload : 5;
}
export const initCase = {
  TOGGLE_TRASH: '[TOGGLE_TRASH,?bool]',
  SET_PAGE: '[SET_PAGE,?num]',
  CALLBACK: '[CALLBACK,?func]',
  RESET: '[RESET,?object]',
};

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
