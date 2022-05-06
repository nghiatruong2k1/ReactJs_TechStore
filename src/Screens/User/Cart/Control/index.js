import {useReducer,useContext,useEffect} from 'react';
import {reducer,initData} from "./init";
import DialogResult from "../../../../Components/DialogResult/";
import {LocalStorage} from "../../../../Config/LocalStorage"; 
function Cart(){
  const {toast} = useContext(global.config.context);
  const [state,dispath] = useReducer(reducer,{
    ...initData,
    datas:LocalStorage.get("cart",[])
  });
  useEffect(function(){
    const newCart = state.datas.filter(function(data){
      if(data){
        return data
      }
    })
    LocalStorage.set("cart",newCart)
  },[state.datas])
  const handle = {
    open:function(){
      dispath({key:'open'})
    },close:function(){
      dispath({key:'close'})
      dispath({key:'clear'})
    },clear:function(){
      dispath({key:'clear'})
    },reset:function(){     
      dispath({key:'reset'})
    },add:function(data,onEnd){
      try {
        dispath({key:"add",payload:data});
        toast.handle.add({message:"Thêm sản phẩm vào giỏ hàng thành công!",type:"success"})
        setTimeout(function(){
          onEnd && onEnd()
        },500)
      } catch(e) {
        toast.handle.add({message:"Thêm sản phẩm vào giỏ hàng không thành công!",type:"error"})
        setTimeout(function(){
          onEnd && onEnd()
        },500)
      }
    },delete:function(index,onEnd){
      DialogResult({
        message:"Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?", 
          onYes:()=>{
            try {
              dispath({key:"delete",payload:index})
              toast.handle.add({message:"Xóa sản phẩm khỏi giỏ hàng thành công!",type:"success"})
              setTimeout(function(){
                onEnd && onEnd()
              },500)
            } catch(e) {
              toast.handle.add({message:"Xóa sản phẩm khỏi giỏ hàng không thành công!",type:"error"})
              setTimeout(function(){
          onEnd && onEnd()
        },500)
            }
          },onNo:()=>{onEnd && onEnd()}
      });

    },setQuantity:function(index,quantity){
      dispath({key:'set_quantity',payload:{index,quantity}})
    },setData:function(index,data){
      dispath({key:'set_data',payload:{index,data}})
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
  return {state,handle}
}
export default Cart;