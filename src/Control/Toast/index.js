import {useState,useMemo} from "react";
import Toast from "../../Components/Toast/";
function useToast(){
  const [toasts,setToasts] = useState([]);
  return useMemo(function(){
    return {
      state:toasts,
      handle:{
        add:function(props){
          setToasts(function([...prevDatas]){
            prevDatas.push(<Toast key={prevDatas.length} {...props} />);
            return prevDatas;
          })
        },reset:function(){
          setToasts([])
        }
      }
    }
  },[toasts]);
}
export default useToast;