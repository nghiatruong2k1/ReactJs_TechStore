import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,Stack,TextField,Card,IconButton,Tooltip} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import Accordion from "../../Accordion/";
import InputText from "../InputText/";
import InputSwitch from "../InputSwitch/";
import InputSelect from "../InputSelect/";

import {DetailContext} from '../init';
import {Frame,Image} from "../../../../../../../Components/";
import PropsUpload from "./Upload/";
function SelectImage({...props}){
  const {state} = useContext(DetailContext);
  return(
    <Accordion title="Hình ảnh" {...props}>
      <Card>
        <Grid container columnSpacing={2} px={2} py={1}>
          <Grid item xs={2}>
            <Frame square>
                <Image 
                  contain 
                  alt={state.data.Name} 
                  src={state.data.ImageUrl}
                />
            </Frame>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={1}>
              <InputText 
                left={{xs:4}}right={{xs:8}} 
                label="Mô tả" 
                feild=""
              />
              <InputText 
                left={{xs:4}}right={{xs:8}} 
                label="Kích thước" 
                TextFieldProps={{
                  inputProps:{
                    readOnly:true
                  }
                }}
                feild=""
              />
              <InputText 
                left={{xs:4}}right={{xs:8}} 
                label="Loại" 
                TextFieldProps={{
                  inputProps:{
                    readOnly:true
                  }
                }}
                feild=""
              />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Tooltip title="Xóa"placement="top" arrow> 
              <IconButton>
                <i className="fas fa-trash-alt"></i>
              </IconButton>
            </Tooltip>
            <Tooltip title="Thêm mới"placement="top" arrow> 
              <IconButton {...PropsUpload()}>
                <i className="fas fa-cloud-upload-alt"></i>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Card>
    </Accordion>
  )
}
export default memo(SelectImage);