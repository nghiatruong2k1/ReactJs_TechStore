import {memo} from 'react';
import clsx from 'clsx';
import {Grid,TextField} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import Accordion from "../../Accordion/";
import InputText from "../InputText/";
import InputSwitch from "../InputSwitch/";
import InputSelect from "../InputSelect/";

import View from "./View/";
import Input from "./Input/";
function SelectImage({...props}){
  return(
    <Accordion title="Hình ảnh" {...props}>
      <Grid container columnSpacing={2}>
        <Grid item xs={5}>
          <View />
        </Grid>
        <Grid item xs={7}>
          <InputText 
            left={{xs:12}}right={{xs:12}} 
            label="Alt" 
            feild=""
          />
          <Input />
        </Grid>
      </Grid>
    </Accordion>
  )
}
export default memo(SelectImage);