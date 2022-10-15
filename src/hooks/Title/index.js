import { useDocumentTitle } from '@mantine/hooks';
import {  useCallback, useEffect, useReducer } from 'react';
import { useGetGlobalStateContext } from '~/states';
import { initState, reducerState } from './init';

export function useInitTitle() {
  const [titles, dispath] = useReducer(reducerState, initState);
  useDocumentTitle(`${titles.length > 0 ? titles[0]+"|" :""}${process.env.REACT_APP_WEBSITE_NAME}`);
  return dispath;
}
export function useHandleTitle() {
  const { title: dispath } = useGetGlobalStateContext();
  return useCallback((string)=>{
    dispath(string);
    return ()=>{
        dispath();
    }
  },[])
}
export function useSetTitle(string,params) {
  const { title: dispath } = useGetGlobalStateContext();
  useEffect((str)=>{
    dispath(string);
    return ()=>{
        dispath();
    }
  },params)
}
