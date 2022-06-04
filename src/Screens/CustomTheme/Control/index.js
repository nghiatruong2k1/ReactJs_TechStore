import {useState,useMemo,useEffect} from 'react';
import {LocalStorage} from "../../../Config/LocalStorage"; 
const modes = {
    light:{
        palette:{
            divider: "#444",
            text: {
                default: "#444",
                paper: "#666",
            },background: {
                default: "#f6f7f9",
                paper: "#fefefe",
            }
        }
    },dark:{
        palette:{
            divider: "#fff",
            text: {
                default: "#fff",
                paper: "#bbb",
            },background: {
                default: "#222222",
                paper: "#010509",
            },action: {
                activatedOpacity: 0.12,
                active: "rgba(250,250,250,0.54)",
                disabled: "rgba(250,250,250,0.26)",
                disabledBackground: "rgba(250,250,250,0.12)",
                disabledOpacity: 0.38,
                focus: "rgba(250,250,250,0.12)",
                focusOpacity: 0.12,
                hover: "rgba(250,250,250,0.04)",
                hoverOpacity: 0.04,
                selected: "rgba(250,250,250,0.08)",
                selectedOpacity: 0.08
            }
        }
    }
}
function useTheme(){
	const [mode,setMode] = useState(LocalStorage.get("mode","light"));
    useEffect(function(){
        LocalStorage.set("mode",mode)
    },[mode])
    return {mode,setMode,modes}
}
export default useTheme;