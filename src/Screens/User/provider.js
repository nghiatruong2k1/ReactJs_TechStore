import {memo} from 'react';
import useCart from "./Cart/Control/";
const UserContext = global.config.UserContext;
function UserProvider({children,...props}){
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