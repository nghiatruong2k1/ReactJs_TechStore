export const initState = {
  data: [],
  status: [],
  isLoading: false,
  inType: 0,
};
export const initCase = {
  SET_DATA: '[set_data,?array]',
  SET_STATUS: '[set_status,?array]',
  SET_LOADING: '[set_loading,?bool]',
  SET_TYPE: '[set_type,?num]',
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
    case initCase.SET_DATA: {
      if (payload !== prevState.data) {
        return {
          ...prevState,
          data:
            (Array.isArray(payload) && payload) || []
        };
      }
      break;
    }
    case initCase.SET_STATUS: {
      if (payload !== prevState.status) {
        return {
          ...prevState,
          status:
            (Array.isArray(payload) && payload) || []
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
    case initCase.SET_TYPE: {
      if (payload !== prevState.inType) {
        return {
          ...prevState,
          inType: payload > 0 ? payload : 0,
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

export const types = [
  {
    text: 'Ngày',
    getLabel: function (time) {
      const dt = new Date(time);
      return dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear();
    },
    get: function (data, defaulItem, callbackResult) {},
  },
  {
    text: 'Tháng',
    getLabel: function (time) {
      const dt = new Date(time);
      return dt.getMonth() + 1 + '/' + dt.getFullYear();
    },
    get: function (data, defaulItem, callbackResult) {},
  },
  {
    text: 'Năm',
    getLabel: function (time) {
      const dt = new Date(time);
      return dt.getFullYear() + '';
    },
    get: function (data, defaulItem, callbackResult) {},
  },
];
