import {memo,useReducer,useMemo}from 'react';
import PropTypes from 'prop-types';
import ViewOption                        from "./Option/";
import ViewTable                         from "./Table/";
import ViewPaging                        from "./Paging/";

import Accordion                         from "../../../../../Components/Accordion/";
import Provider                          from "./provider";
function DataGrid({state,dispath,handle,displays,dataset,option,config,events,title,icon,children,...props}){
  let lstTitle = useMemo(function(){
    return `${title || "Danh sách"} (${state.total || 0}) ${state.inTrash && "(thùng rác)" || ""}`;
  },[state.inTrash,state.total,title]);
  return(
  <Provider {...{state,dispath,handle,displays,dataset,option,config,events}}>
    {children}
    <Accordion 
      {...props}
      title={lstTitle} 
      icon={icon}
      option={<ViewOption />}
    >
      <ViewTable />
      <ViewPaging />
    </Accordion>
  </Provider>  
  )
}
DataGrid.propTypes = {
  state:PropTypes.object,
  displays:PropTypes.array,
  handle:PropTypes.object,
  config:PropTypes.object,
  events:PropTypes.object,
  option:PropTypes.object,
  dataset:PropTypes.object,
  title:PropTypes.string
}
DataGrid.defaultProps = {
  state:{},
  displays:[],
  handle:{},
  config:{},
  events:{},
  option:{},
  dataset:{
    addProps:{},
    updateProps:function(){},
    deleteProps:function(){},
    trashProps:function(){},
    refetchProps:function(){}
  },
  title:"",
}
export default memo(DataGrid);