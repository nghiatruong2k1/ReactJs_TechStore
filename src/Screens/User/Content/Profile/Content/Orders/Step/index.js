import {memo,useContext,useEffect} from 'react';
import {Stack,Stepper,Step,StepButton} from '@mui/material/';
import {OrdersContext} from '../provider';
import styles from './styles.module.css';

import { useFetch } from '../../../../../../../Config/Fetch/';
function OrdersStep({...props}){
  const {state,dispath} = useContext(OrdersContext);
  const Fetch = useFetch();
  useEffect(async function(){
    return await Fetch.get({
        api:"api/orderstatus"
        ,onThen:function({data}){
          dispath(["set_status",data])
          dispath(['set_status_index',0])
        },onError:function(){
          dispath(["set_status",[]])
        }
    });
  },[])
  return(
    <Stack spacing={1} my={1} className={styles.container}>
      <Stepper nonLinear activeStep={state.statusIndex}>
        {
          state.status.map(function(status,index){
            return (
              <Step key={index} >
                <StepButton 
                  sx={{p:1,width:'fit-content'}}
                  onClick={()=>(dispath(['set_status_index',index]))}
                >
                  {status && status.Name}
                </StepButton>
              </Step>
            );
          })
        }
      </Stepper>
    </Stack>
  )
}
export default memo(OrdersStep);