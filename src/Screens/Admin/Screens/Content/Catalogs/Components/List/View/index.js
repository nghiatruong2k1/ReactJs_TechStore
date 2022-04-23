import {memo,useState,useReducer,useMemo,useEffect}from 'react';
import styles                            from './styles.module.css';

import ViewOption                        from "./Option/";
import ViewTable                         from "./Table/";
import ViewPaging                        from "./Paging/";

import Accordion                         from "../../../../../../Components/Accordion/";
import {reducer,initData}                from './init';
import Provider                          from "./provider";
function View({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  const [isOpen,setOpen] = useState(true);
  function toggleOpen(event){
    setOpen(!isOpen)
  }
  let title = useMemo(function(){
    if(state.inTrash){
      return "Thùng rác "+'('+(state.total || 0)+')'
    }else{
      return "Danh sách "+'('+(state.total || 0)+')'
    }
  },[state.inTrash,state.total])
  return(
  <Provider state={state} dispath={dispath}>
    <Accordion 
      {...props}
      title={title} 
      option={<ViewOption />}
    >
      <ViewTable />
      <ViewPaging />
    </Accordion>
  </Provider>  
  )
}
export default memo(View);