import {memo,useContext} from 'react';
import clsx from 'clsx';
import {
  IconButton,
  Tooltip
} from '@mui/material/';
import {
  ContentCopy,
  DeleteForeverRounded,
  Autorenew,
  Save,
  SaveAs
} from '@mui/icons-material/';
import styles from './styles.module.css';
import Title from "../../../../Title/";
import {DetailContext} from "../provider";
function DetailHead({title,...props}){
  const {datas} = useContext(DetailContext);
  return(
    <Title text={title} to="/admin/catalog/image">
        <Tooltip title="Save" placement="top">
          <IconButton color="info"
            onClick={()=>(datas.handle.save())}
          >
            <Save />
          </IconButton>
        </Tooltip>
        <Tooltip title="Save and continue Edit" placement="top">
          <IconButton color="secondary">
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
          <IconButton onClick={()=>(datas.handle.get())}>
            <Autorenew />
          </IconButton>
        </Tooltip>
      </Title>
  )
}
export default memo(DetailHead);