import {
  memo,
  useContext
}                     from 'react';
import clsx           from 'clsx';
import {
  IconButton,
  Tooltip
}                     from '@mui/material/';
import {
  ContentCopy,
  DeleteForeverRounded,
  Autorenew,
  Save,
  SaveAs
}                     from '@mui/icons-material/';
import styles         from './styles.module.css';
import Title          from "../../../../../../Components/Title/";
import {DetailContext}from "../init";
function DetailHead({title,...props}){
  const {state,handle,controller} = useContext(DetailContext);
  const {getRoute} = global.config.useRoute();
  return(
    <Title text={title} to={getRoute("admin",controller,"index")} {...props}>
      <Tooltip title="Save" placement="top">
        <IconButton color="info"
          onClick={()=>{handle.save();}}
        >
          <Save />
        </IconButton>
      </Tooltip>
      <Tooltip title="Save and continue Edit" placement="top">
        <IconButton color="secondary"
          onClick={()=>{handle.save();}}
        >
          <SaveAs />
        </IconButton>
      </Tooltip>
      <Tooltip title="Copy" placement="top">
        <IconButton color="success">
          <ContentCopy />
        </IconButton>
      </Tooltip>
      <Tooltip 
        title={"Sync"} 
        placement="top"
      >
        <IconButton onClick={()=>(handle.refetch())}>
          <Autorenew />
        </IconButton>
      </Tooltip>
    </Title>
  )
}
export default memo(DetailHead);