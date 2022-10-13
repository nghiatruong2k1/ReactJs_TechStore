import { useDocumentTitle } from '@mantine/hooks';
import {  useReducer } from 'react';
import { useGetGlobalStateContext } from '~/states';
import { initState, reducerState,initCase } from './init';

export function useInitTitle() {
  const [titles, dispath] = useReducer(reducerState, initState);
  useDocumentTitle(`${titles.length > 0 ? titles[0]+"|" :""}${process.env.REACT_APP_WEBSITE_NAME}`);
  return dispath;
}
export function useGetTitle() {
  const { title: dispath } = useGetGlobalStateContext();
  return (str)=>{
    dispath([initCase.ADD,str]);
    return ()=>{
        dispath([initCase.REMOVE]);
    }
  };
}
