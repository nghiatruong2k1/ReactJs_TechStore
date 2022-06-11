import {memo,useEffect} from 'react';
import { BrowserRouter }from'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import CustomMessageProvider from './Screens/CustomMessage/provider';
import CustomThemeProvider from './Screens/CustomTheme/';
import useCustomTheme from "./Screens/CustomTheme/Control/";
import useLoading from "./Screens/Loading/Control/";
import AppScreen from "./Screens/";
const GlobalContext = global.config.context;

function App(){
	const loading = useLoading();
	const theme = useCustomTheme();
	return(	
	<BrowserRouter>
		<CookiesProvider>
			<GlobalContext.Provider value={{loading,theme}}>	
				<CustomThemeProvider>
					<CustomMessageProvider>
						<AppScreen />
					</CustomMessageProvider>
				</CustomThemeProvider>	
			</GlobalContext.Provider>
		</CookiesProvider>
	</BrowserRouter>
	)
}
export default memo(App);