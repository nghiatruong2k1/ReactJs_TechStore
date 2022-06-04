import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
const useStyles = function(args = []){
    const theme = useTheme();
    return useMemo(function(){
        return {
            card:{
                height:"100%",
                background:theme.palette.background.paper,
                color:theme.palette.text.paper
            }
        }
    },[theme])
};export default useStyles