export const initState = {
  isOpen: false,
  user: null,
  isLoading: false,
  action: 'login',
};
export const initCase = {
  TOGGLE_OPEN: '[toggle_open,?bool]',
  TOGGLE_LOADING: '[toggle_loading,?bool]',
  SET_USER: '[set_user,?user]',
  TO_LOGIN: '[to_login]',
  TO_REGISTER: '[to_register]',
  TO_FORGET: '[to_forget]',
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
    case initCase.TOGGLE_LOADING: {
      if (payload !== prevState.isLoading) {
        return {
          ...prevState,
          isLoading:
            typeof payload === 'boolean' ? payload : !prevState.isLoading,
        };
      }
      break;
    }
    case initCase.TOGGLE_OPEN: {
      if (payload !== prevState.isOpen) {
        return {
          ...prevState,
          isOpen: typeof payload === 'boolean' ? payload : !prevState.isOpen,
        };
      }
      break;
    }
    case initCase.SET_USER: {
      if (payload !== prevState.user) {
        return {
          ...prevState,
          user: typeof payload === 'object' ? payload : null,
        };
      }
      break;
    }
    case initCase.TO_LOGIN: {
      if ('login' !== prevState.action) {
        return {
          ...prevState,
          action: 'login',
        };
      }
      break;
    }
    case initCase.TO_REGISTER: {
      if ('register' !== prevState.action) {
        return {
          ...prevState,
          action: 'register',
        };
      }
      break;
    }
    case initCase.TO_FORGET: {
      if ('forget' !== prevState.action) {
        return {
          ...prevState,
          action: 'forget',
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
