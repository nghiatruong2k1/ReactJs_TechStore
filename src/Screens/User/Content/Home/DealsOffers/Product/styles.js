import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
const useStyles = function(args = []){
    const theme = useTheme();
    return useMemo(function(){
        return {
            card:{
                color:`${theme.palette.text.default} !important`,
                background:theme.palette.background.default,
                height:'100%'
            }
        }
    },[theme])
};export default useStyles