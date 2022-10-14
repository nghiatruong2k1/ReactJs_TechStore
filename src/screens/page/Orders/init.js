export const initState = {
  data: [],
  status: [],
  statusIndex: 0,
  limit: 3,
  limitStatus: 4,
  page: 1,
  total: 0,
  isLoading: false,
};
export const initCase = {
  SET_DATA: '[SET_DATA,?array]',
  SET_STATUS: '[SET_STATUS,?array]',
  SET_STATUS_INDEX: '[SET_STATUS_INDEX,?array]',
  SET_LOADING: '[SET_LOADING,?bool]',
  SET_TOTAL: '[SET_TOTAL,?num]',
  SET_PAGE: '[SET_PAGE,?num]',
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
    case initCase.SET_DATA: {
      if (payload !== prevState.data) {
        return {
          ...prevState,
          data:
            (Array.isArray(payload) && payload) ||
            Array(prevState.limit).fill({}),
        };
      }
      break;
    }
    case initCase.SET_STATUS: {
      if (payload !== prevState.status) {
        return {
          ...prevState,
          status:
            (Array.isArray(payload) && payload) ||
            Array(prevState.limitStatus).fill({}),
        };
      }
      break;
    }
    case initCase.SET_LOADING: {
      if (payload !== prevState.isLoading) {
        return {
          ...prevState,
          isLoading:
            typeof payload === 'boolean' ? payload : !prevState.isLoading,
        };
      }
      break;
    }
    case initCase.SET_TOTAL: {
      if (payload !== prevState.total) {
        return {
          ...prevState,
          total: payload > 0 ? payload : 0,
        };
      }
      break;
    }
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
