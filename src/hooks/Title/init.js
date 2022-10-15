export const initState = [];
export function reducerState(prevState, title) {
  if (title) {
    if(typeof title === 'function'){
      return [title(), ...prevState];
    }else{
      return [title, ...prevState];
    }
  }else{
    if (prevState.length > 0) {
      return [...prevState.slice(1)];
    }
  }
  return prevState;
}
