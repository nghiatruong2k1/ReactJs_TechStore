export const initState = {
    index:0,
    isLoading:false
};
export const initCase = {
};
export function reducerState(prevState,[key,payload]){
    switch(key){
        case 'set_index':{
            const newIndex = Number(payload)
            return{
                ...prevState,
                index:!Number.isNaN(newIndex) && newIndex || 0
            }
        }
        case 'set_loading':{
            return{
                ...prevState,
                isLoading:Boolean(payload)
            }
        }
        default:{
            console.log(`không tôn tại `,key,initCase)
            return prevState
        }
    }
};