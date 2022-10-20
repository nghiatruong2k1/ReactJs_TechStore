export const initState = {
  values: {},
  valids: {},
};
export const initCase = {
  CHANGE_VALUE:'[CHANGE_VALUE,?obj]',
  CHANGE_VALID:'[CHANGE_VALID,?obj]',
  SET_VALUES:'[SET_VALUES]',
  CALLBACK: '[CALLBACK,?func]',
}
export function reducerState(prevState, [key, payload]) {
  switch (key) {
    case initCase.SET_VALUES: {
      return {
        ...initState,
        values:typeof payload === 'object' ? payload : {}
      };
    }
    case initCase.CHANGE_VALUE: {
      const [name,value] = payload;
      if (prevState.values[name] !== value ) {
        return {
          ...prevState,
          values: {
            ...prevState.values,
            [name]:value,
          },
        };
      }
      break;
    }
    case initCase.CHANGE_VALID: {
      const [name,value] = payload;
      if (prevState.valids[name] !== value ) {
        return {
          ...prevState,
          valids: {
            ...prevState.valids,
            [name]:value,
          },
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
      console.log(key, { prevState, error: 'Không tồn tại action' });
      break;
    }
  }
  return prevState;
}
