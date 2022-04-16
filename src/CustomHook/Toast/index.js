import {useState} from "react";
import Toast from "../../Components/Toast/";
function useToast(){
  const [toasts,setToasts] = useState([]);
  const handleToasts = {
    add:function(props){
      setToasts(function([...prevDatas]){
        prevDatas.push(<Toast key={prevDatas.length} {...props} />);
        return prevDatas;
      })
    },reset:function(){
      setToasts([])
    }
  }
  return(
    {state:toasts,handle:handleToasts}
  )
}
export default useToast;