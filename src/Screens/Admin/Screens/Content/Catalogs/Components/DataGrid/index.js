import {memo,useReducer,useMemo}from 'react';
import PropTypes from 'prop-types';
import ViewOption                        from "./Option/";
import ViewTable                         from "./Table/";
import ViewPaging                        from "./Paging/";

import Accordion                         from "../../../../../Components/Accordion/";
import Provider                          from "./provider";
function DataGrid({state,dispath,handle,displays,dataset,option,config,title,icon,children,...props}){
  let lstTitle = useMemo(function(){
    return `${title || "Danh sách"} (${state.total || 0}) ${state.inTrash && "(thùng rác)" || ""}`;
  },[state.inTrash,state.total,title]);
  return(
  <Provider {...{state,dispath,handle,displays,dataset,option,config}}>
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
  option:PropTypes.object,
  dataset:PropTypes.object,
  title:PropTypes.string
}
DataGrid.defaultProps = {
  state:{},
  displays:[],
  handle:{},
  config:{},
  option:{},
  dataset:{},
  title:"",
}
export default memo(DataGrid);