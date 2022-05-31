export const initState = [];
export const initCase = {
};
export function reducerState(prevState,[key,payload]){
    switch(key){
        case 'clear':{
            return [...initState]
        }
        case 'add':{
            return [payload,...prevState]
        }
        case 'update':{
            return [...prevState]
        }
        case 'remove':{
            return prevState.filter(function(item){
                return item != payload
            })
        }
        default:{
            console.log(`không tôn tại case key`,initCase)
            return prevState
        }
    }
};