import {memo,useState} from 'react';
function useLoading(){
	const [argsLoading,setLoading] = useState([]);
	const handleLoading = {
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
	return(
		{state:argsLoading,handle:handleLoading}
	)
}
export default useLoading;