import {useReducer,useContext,useEffect,useMemo} from 'react';
import {reducer,initData} from "./init";
import DialogResult from "../../../../Components/DialogResult/";
import {LocalStorage} from "../../../../Config/LocalStorage"; 
import { useSnackbar } from "notistack";
function Cart(){
  const { enqueueSnackbar } = useSnackbar();
  const [state,dispath] = useReducer(reducer,{
    ...initData,
    datas:LocalStorage.get("cart",[])
  });
  useEffect(function(){
    const newCart = state.datas.filter(function(data){
      if(data){ return data }
    })
    LocalStorage.set("cart",newCart)
  },[state.datas])
  const handle = useMemo(function(){
    return {
      open:function(){
        dispath(['set_open',true])
      },close:function(){
        dispath(['set_open',false])
        dispath(['clear'])
      },clear:function(){
        dispath(['clear'])
      },reset:function(){     
        dispath(['reset'])
      },add:function(data,onEnd){
        try {
          dispath(["add",data]);
          dispath(['set_data',{data}]);
          enqueueSnackbar({message:"Thêm sản phẩm vào giỏ hàng thành công!",type:"success"})
          return setTimeout(function(){
            onEnd && onEnd()
          },500)
        } catch(e) {
          enqueueSnackbar({message:"Thêm sản phẩm vào giỏ hàng không thành công!",type:"error"})
          return setTimeout(function(){
            onEnd && onEnd()
          },500)
        }
      },delete:function(index,onEnd){
        DialogResult({
          message:"Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?", 
            onYes:()=>{
              try {
                dispath(["delete",index])
                enqueueSnackbar({message:"Xóa sản phẩm khỏi giỏ hàng thành công!",type:"success"})
                return setTimeout(function(){
                  onEnd && onEnd()
                },500)
              } catch(e) {
                enqueueSnackbar({message:"Xóa sản phẩm khỏi giỏ hàng không thành công!",type:"error"})
                return setTimeout(function(){
                  onEnd && onEnd()
                },500)
              }
            },onNo:()=>{onEnd && onEnd()}
        });

      },setQuantity:function(index,quantity){
        dispath(['set_quantity',{index,quantity}])
      },getCount:function(){
        return state.datas.reduce(function(result,data){
          if(data){
            return result+=data.Quantity ?? 0
          }
          return result
        },0) ?? 0;
      },getPrice:function(){
        return state.datas.reduce(function(result,data){
          if(data){
            return result+=data.Quantity * data.Price ?? 0
          }
          return result
        },0) ?? 0;
      }
    }
  },[state])
  return {state,handle}
}
export default Cart;