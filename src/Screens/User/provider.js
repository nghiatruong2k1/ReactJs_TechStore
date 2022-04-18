import {memo} from 'react';
import useCart from "./Cart/Control/";
function UserProvider({children,...props}){
	const UserContext = global.config.UserContext;
	const cart = useCart();
	return(
		<UserContext.Provider value={{
			cart
		}}>
			{children}
		</UserContext.Provider>
	)
}
export default memo(UserProvider);