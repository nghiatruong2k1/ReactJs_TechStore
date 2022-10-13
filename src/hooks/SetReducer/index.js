import {memo,Fragment, useCallback} from 'react';
import clsx from 'clsx';
function useSetReducer(setState,reducer){
    return useCallback((action)=>{
        setState((pre)=>{
            console.log(action)
            return reducer(pre,action)
        })
    },[])
};
export default useSetReducer