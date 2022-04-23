import {memo,useReducer,useMemo,useEffect} from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material/';
import styles from './styles.module.css';
import UploadImageList from "./List/";
import UploadImageAdd from "./Add/";

import UploadImageHead from "./Head/";
import UploadImageFooter from "./Footer/";

import Provider from "./provider";
import {initData,reducer} from './init';
function useUploadImage(props){
  const [state,dispath] = useReducer(reducer,initData);
  const {api} = useMemo(function(){
    return props
  },[props])
  const handle = useMemo(function(){
    return{
      set:(key,value)=>{
        dispath({key:'set',payload:{[key]:value}})
      },open:function(){
        dispath({key:'open'})
        dispath({key:'action',payload:""})
      },close:function(){
        dispath({key:'close'})
      }
    }
  },[])
  return [state,handle];
}
export {useUploadImage}

function UploadImage({state,handle,onSubmit,onCancel,defaultData,...props}){
  const handleData = useMemo(function(){
    return {
      select:function(data){
        handle.set("data",data)
      }
    }
  })
  const handleEvent = useMemo(function(){
    return {
      cancel:function(){
        onCancel && onCancel()
      },submit:function(){
        onSubmit && onSubmit(state.data || defaultData)
      }
    }
  },[state.data])
  return(
    <Provider defaultData={defaultData} state={state} handle={{...handleEvent,...handleData,...handle}} onSubmit={onSubmit} onCancel={onCancel}>
      <Dialog
          open={state && state.isOpen || false}
          onClose={()=>(handle && handle.close())}
          fullWidth={true}
          maxWidth={"lg"}
          scroll={'paper'}
          PaperProps={{
            className:styles.container
          }}
        >
          <DialogTitle className={styles.head}>
            <UploadImageHead />
          </DialogTitle>
          <DialogContent className={styles.content} dividers={true}>
            {state && state.action == "" && <UploadImageList />}
            {state && state.action == "add" && <UploadImageAdd />}
          </DialogContent>
          <DialogActions className={styles.footer}>
            <UploadImageFooter />
          </DialogActions>
      </Dialog>
    </Provider>
  )
}
export default memo(UploadImage);