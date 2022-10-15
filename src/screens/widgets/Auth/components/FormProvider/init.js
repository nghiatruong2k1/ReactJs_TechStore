export const initCase = {
  CHANGE_VALUE: '[change_value,object]',
  CHANGE_VALID: '[change_valid,object]',
  SET_LOADING: '[set_loading,?bool]',
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
    case initCase.CHANGE_VALUE: {
      return {
        ...prevState,
        values: { ...prevState.values, ...payload },
      };
    }
    case initCase.CHANGE_VALID: {
      return {
        ...prevState,
        valids: { ...prevState.valids, ...payload },
      };
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
    default: {
      console.log(`không tôn tại case`, key, initCase);
    }
  }
  return prevState;
}
