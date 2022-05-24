import {memo,useContext,useState,useMemo} from 'react';
import clsx from 'clsx';
import {
  Visibility,VisibilityOff
} from '@mui/icons-material/';
import {DataContext} from "../../../../provider";
import OptionButton from "../../../../Option/Components/Button/"
import styles from './styles.module.css';
function PublicButton({data,loading,...props}){
  const [isLoading,setLoading] = useState(false);
  const {state,dataset} = useContext(DataContext);
  const attr = useMemo(function(){
    return dataset.publicProps && dataset.publicProps(data,setLoading) || {}
  },[data])
  return(
    <OptionButton 
      title={data && data.IsPublic && "Công khai" || "Riêng tư"} 
      loading={loading || isLoading}
      icon={data && data.IsPublic && <Visibility /> || <VisibilityOff />}
      {...attr}
    />
  )
}
export default memo(PublicButton);