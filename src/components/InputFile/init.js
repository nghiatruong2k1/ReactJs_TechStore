export const initState = {
  isOpen: false,
  router: '',
};
export const initCase = {
  TOGGLE_OPEN: '[toggle_open,?bool]',
  TO_LIST: '[TO_LIST]',
  TO_ADD: '[TO_ADD]',
  TO_UPDATE: '[TO_UPDATE]',
};
export function reducerState(prevState, [key, payload, callback]) {
  switch (key) {
    case initCase.TOGGLE_OPEN: {
      if (payload !== prevState.isOpen) {
        return {
          ...prevState,
          isOpen: typeof payload === 'boolean' ? payload : !prevState.isOpen,
        };
      }
      break;
    }
    case initCase.TO_LIST:{
        return{
            ...prevState,
            router:''
        }
    }
    case initCase.TO_ADD:{
        return{
            ...prevState,
            router:'add'
        }
    }
    case initCase.TO_UPDATE:{
        return{
            ...prevState,
            router:'update'
        }
    }
    default: {
      console.log(`không tôn tại case`, key, initCase);
    }
  }
  return prevState;
}
