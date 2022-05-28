import {memo,createContext,useState,useMemo} from 'react';

import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
export const CustomThemeContext = createContext({});
/*
    --light: #444;
    --lightBg: #f6f7f9;
    --dark: #fff;
    --darkBg: #212529;
*/

const modes = {
    light:{
        divider: "#444",
        text: {
            default: "#444",
            paper: "#666",
        },background: {
            default: "#f6f7f9",
            paper: "#fefefe",
        },
    },dark:{
        divider: "#fff",
        text: {
            default: "#fff",
            paper: "#bbb",
        },background: {
            default: "#212529",
            paper: "#010509",
        },
    }
}

function CustomThemeProvider({children}){
    const [mode,setMode] = useState("light");
    const theme = useMemo(function(){
        return createTheme({
            palette:{
                mode,
            ...modes[mode]
            }
        });
    },[mode])
    return (
    <CustomThemeContext.Provider value={{mode,setMode,modes}}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </CustomThemeContext.Provider>
    )
};export default memo(CustomThemeProvider)