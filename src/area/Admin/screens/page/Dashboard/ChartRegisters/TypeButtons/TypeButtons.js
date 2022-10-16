import { memo, useContext, useCallback } from 'react';
import clsx from 'clsx';
import { Button } from '@mui/material/';
import styles from './TypeButtons.module.css';
import { ChartRegistersContext, useGetChartRegistersContext } from '../provider';
import { types, initCase } from '../init';
function TypeButtons() {
  const {
    state: { inType },
    dispath,
  } = useGetChartRegistersContext();
  const handleClick = useCallback((index) => {
    dispath([initCase.SET_TYPE, index]);
  }, []);
  return types.map((type, index) => {
    const active = inType === index;
    return (
      <Button
        size="small"
        key={index}
        onClick={()=>{handleClick(index)}}
        className={clsx(styles.button, {
          [styles.active]: active,
        })}
        variant="contained"
      >
        {type.text}
      </Button>
    );
  });
}
export default memo(TypeButtons);
