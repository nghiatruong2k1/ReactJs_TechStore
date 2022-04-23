import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Paper,Grid,Stack,TextField,Card,IconButton,Tooltip,Divider} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailContext} from "../init";
import Accordion from "../../../../../../Components/Accordion/";
import InputText from "../InputText/";


import {Frame,Image} from "../../../../../../../../Components/";
import UploadImage,{useUploadImage} from "../../../../../../../../Components/UploadImage/";

function SelectImage({...props}){
  const {state,handle} = useContext(DetailContext);
  const [stateUpload,handleUpload] = useUploadImage({})
  function handleSubmit(data){
    handle.change('ImageId',data.Id);
    handle.change('ImageUrl',data.Url);
  }
  return (
    <>
    <Accordion title="Hình ảnh" {...props}>
        <Grid container alignItems = 'center' columnSpacing={2} px={2} py={1}>
          <Grid item xs={3}>
            <Frame rectangle component={Paper}>
                <Image 
                  contain 
                  alt={state.data.Name} 
                  src={state.data.ImageUrl}
                />
            </Frame>
          </Grid>
          <Grid item xs={6}>
            <InputText
                left={{xs:4}} right={{xs:8}} 
                label="Mô tả"
            />
          </Grid>
          <Grid item xs={3}>
            <Tooltip title="Xóa"placement="top" arrow> 
              <IconButton>
                <i className="fas fa-trash-alt"></i>
              </IconButton>
            </Tooltip>
            <Tooltip onClick={()=>{handleUpload.open()}} title="Upload"placement="top" arrow> 
              <IconButton >
                <i className="fas fa-cloud-upload-alt"></i>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Divider />
    </Accordion>
    <UploadImage 
      onSubmit={handleSubmit}
      defaultData={{
        Id:state.data && state.data.ImageId || 0,
        Url:state.data && state.data.ImageUrl || ""
      }} 
      state={stateUpload} 
      handle={handleUpload}
    />
    </>
  )
}
export default memo(SelectImage);