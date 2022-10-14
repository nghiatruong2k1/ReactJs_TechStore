export const initState = {
    voucher:null
};
export const initCase = {
    CHANGE_VOUCHER:'[CHANGE_VOUCHER,?obj]',
};
export function reducerState(prevState,[key,payload]){
    switch(key){
        case initCase.CHANGE_VOUCHER:{
			if (payload !== prevState.voucher) {
				return {
				  ...prevState,
				  voucher:payload ?? null,
				};
			  }
			  break;
		}
        default:{
            console.log(`không tôn tại case`,key,initCase)
        }
    }
    return prevState
};