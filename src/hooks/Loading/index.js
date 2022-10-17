import { useCallback, useReducer } from "react";
import { initState, reducerState} from "./init";
export const useInitLoading = (name)=>{
    const [state,dispath] = useReducer(reducerState,initState);
    const handleLoading = useCallback((location)=>{
        dispath(true)
        //console.log(`Start loading ${name} in ${location}`)
        return ()=>{
            //console.log(`Clean loading ${name} in ${location}`)
            dispath(false)
        }
    })
    return [Boolean(state > 0),handleLoading]
}