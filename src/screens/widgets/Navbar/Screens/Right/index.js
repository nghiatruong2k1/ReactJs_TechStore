
import {memo,useMemo,useContext} from 'react';
import NavMenu from "../../components/NavMenu";
import {LightMode,DarkMode} from '@mui/icons-material/';
// const useThemeButton = function(){
//   const {theme:{mode,setMode}} = useContext(global.config.context);
//   return useMemo(function(){
//     return{
//       text:(mode === 'light' ?  "Giao diện tối" : "Giao diện sáng"),
//       icon:(mode === 'light' ?  <DarkMode /> : <LightMode />),
//       onClick:function(){
//         setMode(mode === 'light' ? "dark" : "light")
//       }
//     }
//   },[mode])
// }
function RightNav(props){
  const datas = useMemo(function(){
    return [
      {
        to:"#",
        text:"Tải ứng dụng"
      }
    ]
  },[])
  // const themeButton = useThemeButton();
  return(
    <NavMenu datas={[...datas]} {...props}/>
  )
}
export default memo(RightNav);
