
export const initState = {
	limit:8
};
export const initCase = {
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
    default: {
      console.log(`không tôn tại case`, key, initCase);
    }
  }
  return prevState;
}
