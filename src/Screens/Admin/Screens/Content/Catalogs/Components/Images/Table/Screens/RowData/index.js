import {memo,useContext} from "react"
import clsx from 'clsx';
import {
  TableRow
} from '@mui/material/';
import styles from './styles.module.css';



import {DataContext} from '../../../provider';

import CellCheckbox from "../../Components/Checkbox/";
import CellImage from "../../Components/Image/";
import CellText from "../../Components/Text/";
import CellOption from "../../Components/Option/";


import PublicButton from "./PublicButton/";
import TrashButton from "./TrashButton/";
import EditButton from "./EditButton/";
import DeleteButton from "./DeleteButton/";


function RowData({data,loading,isOld,...props}){
  const {displays} = useContext(DataContext);
  return(
    <>
      <TableRow className={clsx({[styles.old]:isOld})}>
        <CellCheckbox key={0} loading={loading} className={clsx(styles.cell)}/>
        {
          displays.map(({type,style,...display},index)=>{
            let Cell = CellText;
            {switch (type) {
              case 'image':
                Cell = CellImage;
                break;
              case 'checkbox':
                Cell = CellCheckbox;
                break;
            }}
            return (<Cell  
              key={index + 1}
              data={data} 
              display={display}  
              loading={loading} 
              style={style} 
              className={clsx(styles.cell)}
            />)
          })
        }
        <CellOption 
          key={displays.length + 1} 
          loading={loading} 
          className={clsx(styles.cell)} 
        >
          <PublicButton data={data} loading={loading}/>
          <TrashButton data={data} loading={loading}/>
          <DeleteButton data={data} loading={loading}/>
          <EditButton data={data}loading={loading}/>
        </CellOption>
      </TableRow>
    </>
  )
}
export default memo(RowData);