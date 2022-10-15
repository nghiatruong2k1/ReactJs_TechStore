import { useCallback} from 'react';
function useSetReducer(setState,reducer){
    return useCallback((action)=>{
        setState((pre)=>{
            return reducer(pre,action)
        })
    },[])
};
export default useSetReducer