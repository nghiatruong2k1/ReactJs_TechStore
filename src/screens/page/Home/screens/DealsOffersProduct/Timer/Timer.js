import { memo, useEffect, useState } from 'react';
import { Stack } from '@mui/material/';
import styles from './Timer.module.css';
function loadTime(time) {
  let newTime = Number(time);
  if (newTime < 10) {
    return '0' + newTime;
  } else {
    return newTime;
  }
}
const TimeView = memo(({ time, text }) => {
  return (
    <div className={styles.time}>
      <span className={styles.num}>{loadTime(time ?? 0)}</span>
      <small className={styles.text}>{text}</small>
    </div>
  );
});
const timer = new Date('2022/11/30 14:30:00');
function Timer() {
  const [timeD, setD] = useState(0);
  const [timeH, setH] = useState(0);
  const [timeM, setM] = useState(0);
  const [timeS, setS] = useState(0);

  useEffect(
    function () {
      function handleTime() {
        let time = (timer.getTime() - Date.now()) / 1000;
        if (time > 0) {
          setS(Math.round(time % 60));
          time = Math.round(time / 60);
          setM(Math.round(time % 60));
          time = Math.round(time / 60);
          setH(Math.round(time % 24));
          time = Math.round(time / 24);
          setD(time);
          return false;
        } else {
          return true;
        }
      }
      handleTime();

      const interval = setInterval(function () {
        if (handleTime()) {
          clearInterval(interval);
        }
      }, 1000);
      return function () {
        clearInterval(interval);
      };
    },
    [timer],
  );
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <TimeView time={timeD} text=" Ngày " />
      <TimeView time={timeH} text=" Giờ " />
      <TimeView time={timeM} text=" Phút " />
      <TimeView time={timeS} text=" Giây" />
    </Stack>
  );
}
export default memo(Timer);
