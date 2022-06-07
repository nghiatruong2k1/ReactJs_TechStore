import {memo,useContext} from 'react';
import {Paper,IconButton} from '@mui/material/';
import {PhotoCamera} from '@mui/icons-material/';
import {Frame,Image} from "../../../../../../../../../../../Components/";
function CellImage({enableEdit,onChange,onSave,name,nameAlt,nameId,loading,data,sx,...props}){
  const {image} = useContext(global.config.AppContext);
  return(
    <Paper variant="outlined" sx={{mx:'auto',...sx}}  {...props}>
      <Frame rectangle loading={loading}>
        <Image contain name={name} alt={data && data[nameAlt]} src={data && data[name]}/>
        {
          enableEdit && (
            <IconButton sx={{position:'absolute',top:0,right:0}}
              onClick={()=>{
                if(data){
                  image.handle.open({
                    onSubmit:function({value:{Id,Url}}){
                      data[name] = Url;
                      data[nameId] = Id;
                      onChange && onChange(data);
                      onSave && onSave(data);
                    }
                    
                  })
                }           
              }}
            >
              <PhotoCamera />
            </IconButton>
          )
        }
      </Frame>
    </Paper>
  )
}
export default memo(CellImage);