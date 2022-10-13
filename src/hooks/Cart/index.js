import { useLocalStorage } from '@mantine/hooks';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { useGetGlobalStateContext } from '~/states';
import {LocalStore} from '~/config/LocalStore';
import useSetReducer from '../SetReducer';

import { initState, initReducerState, initCase } from './init';

const KEY_STORE = 'cart';
export function useInitCart() {
  const { enqueueSnackbar } = useSnackbar();
  const [state,setState] = useState({...initState,data:LocalStore.get(KEY_STORE,[])});
  const dispath = useSetReducer(setState,initReducerState(enqueueSnackbar))
  useEffect(function(){
    let newCart = []
    if(Array.isArray(state.data)){
      newCart = state.data.filter(function(data){
        return data
      })
    }
    LocalStore.set(KEY_STORE,newCart)
  },[state.data])
  return { state, dispath };
}
export function useGetCart() {
  const {
    cart: { state, dispath },
  } = useGetGlobalStateContext();
  return { state, dispath, initCase };
}
