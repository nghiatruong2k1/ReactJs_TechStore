export const initState = 0;
export const initCase = {
    INCREASE:'increase',
    DECREASE:'decrease'
};
export function reducerState(prevState,key){
    switch(key){
        case initCase.INCREASE:{
            return prevState+1
        }
        case initCase.DECREASE:{
            return prevState-1
        }
        default:{
            console.log(`không tôn tại case`,key,initCase)
        }
    }
    return prevState
};