export const initState = [];
export const initCase = {
  ADD: '[add,str]',
  REMOVE: '[remove]',
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
    case initCase.ADD: {
      if (payload) {
        return [payload, ...prevState];
      }
      break;
    }
    case initCase.REMOVE: {
      if (prevState.length > 0) {
        return [...prevState.slice(1)];
      }
      break;
    }
    default: {
      console.log(`không tôn tại case`, key, initCase);
    }
  }
  return prevState;
}
