import {memo,useEffect} from 'react';
import { BrowserRouter }from'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import CustomMessageProvider from './Screens/CustomMessage/provider';
import CustomThemeProvider from './Screens/CustomTheme/provider';
import useLoading from "./Screens/Loading/Control/";
const GlobalContext = global.config.context;
function GlobalProvider({children,...props}){
	const loading = useLoading();
	return(	
	<BrowserRouter>
		<CookiesProvider>
			<GlobalContext.Provider value={{loading}}>	
				<CustomThemeProvider>
					<CustomMessageProvider>
						{children}
					</CustomMessageProvider>
				</CustomThemeProvider>	
			</GlobalContext.Provider>
		</CookiesProvider>
	</BrowserRouter>
	)
}
export default memo(GlobalProvider);