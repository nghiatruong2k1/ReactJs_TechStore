import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
const useStyles = function(args = []){
    const theme = useTheme();
    return useMemo(function(){
        return {
            card:{
                color:`${theme.palette.text.default}`,
                background:`${theme.palette.background.default}`,
                width:'100%',
                height:'100%',
                m:0
            },
            button:{
                px:{xs:0.5,sm:1,md:1.5,lg:2},
                py:{xs:0.5,md:1},
                color:"#fff",bgcolor:"var(--help)"
            }
        }
    },[theme])
};export default useStyles