import {memo,createContext} from 'react';
import useCart from "../../CustomHook/Cart/";
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