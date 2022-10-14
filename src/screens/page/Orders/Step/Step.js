import { memo} from 'react';
import { Stack, Stepper, Step, StepButton } from '@mui/material/';
import styles from './Step.module.css';
function StepComponent({ status, statusIndex, onChange }) {
  return (
    <Stack spacing={1} my={1} className={styles.container}>
      <Stepper nonLinear activeStep={statusIndex}>
        {Array.isArray(status) &&
          status.map(function (status, index) {
            return (
              <Step key={index}>
                <StepButton
                  sx={{ p: 1, width: 'fit-content' }}
                  onClick={()=>{onChange && onChange(index)}}
                >
                  {status && status.Name}
                </StepButton>
              </Step>
            );
          })}
      </Stepper>
    </Stack>
  );
}
export default memo(StepComponent);
