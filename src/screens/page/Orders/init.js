export function getPage(payload) {
  payload = Number(payload);
  return payload > 1 ? payload : 1;
}
export function getStatusIndex(payload) {
  payload = Number(payload);
  return payload > 0 ? payload : 0;
}
export function getLimit(payload) {
	payload = Number(payload);
	return payload > 0 ? payload : 12;
  }
export const initState = ({limit,page,statusIndex})=>{
  return{
    limit:getLimit(limit),
    page:getPage(page),
    statusIndex:getStatusIndex(statusIndex)
  }
}
export const initCase = {
  SET_STATUS_INDEX: '[SET_STATUS_INDEX,?array]',
  SET_PAGE: '[SET_PAGE,?num]',
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
    case initCase.SET_STATUS_INDEX: {
      if (payload !== prevState.statusIndex) {
        return {
          ...prevState,
          statusIndex: payload > 0 ? payload : 0,
        };
      }
      break;
    }
    case initCase.SET_PAGE: {
      if (payload !== prevState.page) {
        return {
          ...prevState,
          page: payload > 1 ? payload : 1,
        };
      }
      break;
    }
    default: {
      console.log(`không tôn tại case`, key, initCase);
    }
  }
  return prevState;
}
