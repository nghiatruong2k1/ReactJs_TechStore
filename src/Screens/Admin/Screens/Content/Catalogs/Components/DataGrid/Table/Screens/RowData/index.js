import {memo,useContext,useState,useEffect} from "react"
import clsx from 'clsx';
import {
  TableRow
} from '@mui/material/';
import styles from './styles.module.css';



import {DataContext} from '../../../provider';

import Cell from "../../Components/Cell/";


import PublicButton from "./PublicButton/";
import TrashButton from "./TrashButton/";
import EditButton from "./EditButton/";
import DeleteButton from "./DeleteButton/";



function RowData({data,loading,old,...props}){
  const {displays,handle,dataset} = useContext(DataContext);
  const [isCheck,setCheck] = useState(false);
  useEffect(function(){
    setCheck(false)
  },[data])
  return(
    <>
      <TableRow className={clsx({[styles.old]:old})}>
        <Cell 
          type="checkbox"
          key={0}
          display={{
            name:"isCheck",
            onChange:(e,v)=>{console.log(e,v);setCheck(v)}
          }}
          data={{isCheck}}
          loading={loading} 
        />
        {
          displays.map(({type,disabledEdit,...display},index)=>{
            return (
              <Cell  
                type={type}
                key={index + 1}
                data={data} 
                display={display}  
                loading={loading} 
                enableEdit={disabledEdit ? false : dataset.enableEdit}
                onChange={handle.changeData}
                onSave={handle.saveData}
              />)
          })
        }
        <Cell 
          type="option"
          key={displays.length + 1} 
          loading={loading} 
          cellProps={{sx:{fontSize:"1.2em !important"}}}
        >
          <PublicButton data={data} loading={loading}/>
          <TrashButton data={data} loading={loading}/>
          <DeleteButton data={data} loading={loading}/>
          <EditButton data={data}loading={loading}/>
        </Cell>
      </TableRow>
    </>
  )
}
export default memo(RowData);