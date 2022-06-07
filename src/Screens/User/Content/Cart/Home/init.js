export const initData = {
	voucher:null
};
export function reducer(prevState,[key,payload]) {
	switch(key){
		case 'set_voucher':{
			return {
				...prevState,
				voucher:payload
			}
		}
		default:{
		console.log(key,{prevState,"error":"Không tồn tại action"})
			return{
				...prevState
			}
		}
	}
};
