export function getPage(payload) {
  payload = Number(payload);
  return payload > 1 ? payload : 1;
}
export function getLimit(payload) {
  payload = Number(payload);
  return payload > 0 ? payload : 12;
}
export function getQuery(payload) {
  return payload !== '';
}
export const initState = ({ limit, page, query }) => {
  return {
    limit: getLimit(limit),
    page: getPage(page),
    query: getQuery(query),
  };
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
