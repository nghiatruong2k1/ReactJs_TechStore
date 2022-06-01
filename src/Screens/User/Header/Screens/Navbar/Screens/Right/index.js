
import {memo,useMemo,useContext} from 'react';
import NavMenu from "../../Components/NavMenu/";
import {LightMode,DarkMode} from '@mui/icons-material/';
const useThemeButton = function(){
  const {theme:{mode,setMode}} = useContext(global.config.context);
  return useMemo(function(){
    return{
      text:(mode === 'light' ? "Light Mode" : "Dark Mode"),
      icon:(mode === 'light' ? <LightMode /> : <DarkMode />),
      onClick:function(){
        setMode(mode === 'light' ? "dark" : "light")
      }
    }
  },[mode])
}
function RightNav({...props}){
  const datas = useMemo(function(){
    return [
      {
        to:"#",
        text:"Tải ứng dụng"
      }
    ]
  },[])
  const themeButton = useThemeButton();
  return(
    <NavMenu {...props} datas={[...datas,themeButton]} />
  )
}
export default memo(RightNav);
