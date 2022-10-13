export const initState = {
  Id: 0,
  Quantity: 1
};
export const initCase = {
  SET_ID: '[set_id,num]',
  SET_QUANTITY: '[set_quantity,num]'
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
    case initCase.SET_ID: {
      if (payload != prevState.Id) {
        payload = Number(payload)
        return {
          ...prevState,
          Id: payload > 0 ? payload : 0,
        };
      }
      break;
    }
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
