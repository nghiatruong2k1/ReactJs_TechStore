function getPage(payload) {
  payload = Number(payload);
  return payload > 1 ? payload : 1;
}

export const initState = {
  limit: 6,
  page: 1,
};
export const initCase = {
  SET_PAGE: '[set_page,?num]',
};

export function reducerState(prevState, [key, payload]) {
  switch (key) {
    case initCase.SET_PAGE: {
      if (payload !== prevState.page) {
        return {
          ...prevState,
          page: getPage(payload),
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
