import {useMemo} from 'react'
import { useTheme } from '@mui/material/styles';
const useStyles = function(args = []){
  const theme = useTheme();
  return useMemo(function(){
    return {
      option:{
        
      },button:{
        borderWidth:{xs:1,lg:0}
        ,borderStyle:'solid'
        ,borderColor:"curentcolor"
        ,p:{xs:0.1,sm:0.2,md:0.3,lg:0.4}
        ,fontSize:{xs:'0.8em',lg:'1em'}
        ,width:{xs:'3.5em',lg:'100%'}
        ,height:{xs:'3.5em',lg:'100%'}
        ,minWidth:{xs:'auto',lg:'5em'}
        ,display:'inline-flex'
        ,flexDirection:'column'
        ,alignItems:"center"
        ,color:`${theme.palette.text.paper} !important`
      },icon:{
        fontSize:'1.2em'
      },text:{
        whiteSpace: "nowrap"
        ,overflow: "hidden"
        ,textOverflow: "ellipsis"
        ,width: "100%"
        ,textAlign:"center"
        ,display:{
          xs:'none',
          lg:'block'
        }
      }
    }
  },[ theme])
};
export default useStyles