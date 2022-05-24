import {memo,useContext,useState,useMemo} from 'react';
import clsx from 'clsx';
import {DeleteForeverRounded} from '@mui/icons-material/';
import {DataContext} from "../../../../provider";
import OptionButton from "../../../../Option/Components/Button/"

function DeleteButton({data,loading,...props}){
  const [isLoading,setLoading] = useState(false);
  const {dataset} = useContext(DataContext);

  const attr = useMemo(function(){
    return dataset.deleteProps && dataset.deleteProps(data,setLoading) || {}
  },[data]);

  if(data && data.IsTrash){
    return(
      <OptionButton 
        title={"Xóa vĩnh viễn"} 
        loading={loading || isLoading}
        icon={<DeleteForeverRounded />}
        {...attr}
      />
    )
  }else{
    return <></>
  }
}
export default memo(DeleteButton);