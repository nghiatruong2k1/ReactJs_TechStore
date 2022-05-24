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
import { getRoute } from '../../../../../../../../Config/Route/';
import {DetailContext} from "../index";
function DetailHead({title,...props}){
  const {state,handle,controller} = useContext(DetailContext);
  return(
    <Title text={title} to={getRoute("admin",controller,"index")} {...props}>
      <Tooltip title="Lưu và làm mới" placement="top" arrow>
        <span>
          <IconButton disabled={state.isLoading} color="info"
            onClick={()=>{handle.save && handle.save({
              onEnd:function(){
                handle.refetch && handle.refetch()
              }
            });}}
          >
            <Save />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Lưu" placement="top" arrow>
        <span>
          <IconButton disabled={state.isLoading} color="secondary"
            onClick={()=>{handle.save && handle.save();}}
          >
            <SaveAs />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Sao chép" placement="top" arrow>
        <span>
          <IconButton disabled={state.isLoading} color="success">
            <ContentCopy />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title={"Làm mới"} placement="top" arrow>
        <span>
          <IconButton disabled={state.isLoading} onClick={()=>{handle.refetch && handle.refetch();}}>
            <Autorenew />
          </IconButton>
        </span>
      </Tooltip>
    </Title>
  )
}
export default memo(DetailHead);