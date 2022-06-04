import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
const useStyles = function(args = []){
    const theme = useTheme();
    return useMemo(function(){
        return {
            container:{
                color:theme.palette.text.paper,
                background:theme.palette.background.paper
            }
        }
    },[theme])
};export default useStyles