export const initState = {
    isOpen:false,
    isLoading:false,
    isError:false
};
export const initCase = {
};
export function reducerState(prevState,[key,payload]){
    switch(key){
        case 'set_open':{
            return {
                ...prevState,
                isOpen:Boolean(payload)
            }
        }
        case 'set_loading':{
            return {
                ...prevState,
                isLoading:Boolean(payload)
            }
        }
        case 'set_error':{
            return {
                ...prevState,
                isError:Boolean(payload)
            }
        }
        default:{
            console.log(`không tôn tại case key`,initCase)
            return prevState
        }
    }
};