import {memo,useContext,useMemo} from 'react';

import { ThemeProvider } from '@mui/styles';
import { createTheme,useTheme } from '@mui/material/styles';

const breakpoints = {
    values:{
        xs: 0,
        ls: 400,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
    }
}
function mergeTheme(current,mode){
    const newTheme = {};
    newTheme.palette = mode.palette;
    return newTheme;
}
function CustomThemeProvider({children}){
    const {theme:{mode,modes}} = useContext(global.config.context);
    const defaultTheme  = useTheme();
    const theme = useMemo(function(){
        return createTheme({
            ...mergeTheme(defaultTheme,modes[mode]),
            breakpoints
        });
    },[mode])
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
};export default memo(CustomThemeProvider)