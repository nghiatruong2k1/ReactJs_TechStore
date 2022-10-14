export const initState = {
  Quantity: 1
};
export const initCase = {
  SET_QUANTITY: '[set_quantity,num]'
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
    case initCase.SET_QUANTITY: {
      if (payload != prevState.Quantity) {
        return {
          ...prevState,
          Quantity: payload,
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
