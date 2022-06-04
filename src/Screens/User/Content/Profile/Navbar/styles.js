import {useMemo} from "react";
import { useTheme } from '@mui/material/styles';
const useStyles = function(args = []){
    const theme = useTheme();
    return useMemo(function(){
        console.log(theme)
        return {
            // card:{
            //     color:theme.palette.color.paper
            //     ,background:theme.palette.background.paper
            // }
        }
    },[theme])
};export default useStyles