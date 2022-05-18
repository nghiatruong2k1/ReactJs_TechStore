import {memo,useContext,useState,useMemo} from 'react';
import clsx from 'clsx';
import {RestoreFromTrash,DeleteForeverRounded} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DataContext} from "../../../../provider";
import OptionButton from "../../../../Option/Components/Button/"
function TrashButton({data,loading,...props}){
  const [isLoading,setLoading] = useState(false);
  const {state,dataset} = useContext(DataContext);
  return(
    <OptionButton 
      title={data && data.IsTrash && "Khôi phục" || "Xóa tạm"} 
      loading={loading || isLoading}
      className={"trash-btn"}
      icon={data && data.IsTrash && <RestoreFromTrash /> || <DeleteForeverRounded />}
      buttonProps = {dataset.trashProps && dataset.trashProps(data,setLoading)}
    />
  )
}
export default memo(TrashButton);