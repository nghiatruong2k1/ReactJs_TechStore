export const getAction = (function(){
	const args = {
		login:1,
		register:2,
		forgetPassword:3
	}
	return function(action){
		return args[action] ?? args.login
	}
}());
export const initData = {
	isOpen:false,
	user:undefined,
	isLoading:false,
	action:getAction()
};
export function reducer(prevState,[key,payload]) {
	switch(key){
		case 'set':{
			return {
				...prevState,
				...payload
			}
		}
		case 'open':{
			return {
				...prevState,
				isOpen:true,
				action:getAction(payload)
			}
		}
		case 'close':{
			return {
				...prevState,
				isOpen:false
			}
		}
		case 'set_user':{
			return{
				...prevState,
				user:(typeof(payload) === 'object') && payload || null
			}
		}
		case 'set_loading':{
			return{
				...prevState,
				isLoading:payload
			}
		}
		case 'set_action':{
			return {
				...prevState,
				action:getAction(payload)
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
