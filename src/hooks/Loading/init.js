export const initState = 0;
export function reducerState(prevState,action){
    if(action){
        return prevState+1;
    }else{
        if(prevState > 0){
            return prevState-1;
        }
    }
    return prevState;
};