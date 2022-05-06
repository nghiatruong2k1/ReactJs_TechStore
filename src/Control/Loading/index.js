import {useState,useMemo} from 'react';
function useLoading(){
	const [loadings,setLoading] = useState([]);
	return useMemo(function(){
		return {
			state:loadings,
			handle:{
				add:function(){
					setLoading(function([...prevDatas]){
						prevDatas.push(true);
						return prevDatas;
					})
				},remove:function(){
					setLoading(function([...prevDatas]){
						prevDatas.pop();
						return prevDatas;
					})
				},reset:function(){
					setLoading([])
				}
			}
		}
	},[loadings]);
}
export default useLoading;