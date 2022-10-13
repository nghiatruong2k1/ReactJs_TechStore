import { useReducer } from "react";
import { useGetGlobalStateContext } from "~/states";
import { initState, reducerState,initCase } from "./init";

export function useInitLoading(){
    const [state,dispath] = useReducer(reducerState,initState);
    return {state,dispath}
}
export function useGetLoading(){
    const {loading:{state,dispath}} = useGetGlobalStateContext();
    return {state,dispath,initCase}
}