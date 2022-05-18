import {memo,useEffect,useState} from 'react';
import {Stack} from "@mui/material/";
import styles from "./styles.module.css";
function loadTime(time) {
  let newTime = Number(time);
  if (newTime < 10) {
      return "0" + newTime;
  } else {
      return newTime;
  }
}
function Timer({...props}){
  const [timer,setTimer] = useState(function(){
    return new Date("2022/05/30 14:30:00");
  });
  const [timeD,setD] = useState(0);
  const [timeH,setH] = useState(0);
  const [timeM,setM] = useState(0);
  const [timeS,setS] = useState(0);

  useEffect(function(){
    handleTime();

    const interval = setInterval(function () {     
        if(handleTime()){
           clearInterval(interval);
        }
    }, 1000)

    function handleTime() {
        let time = (timer.getTime() - Date.now()) / 1000;
        if(time > 0){
          setS(Math.round(time % 60));
          time = Math.round(time / 60);
          setM(Math.round(time % 60))
          time = Math.round(time / 60);
          setH(Math.round(time % 24))
          time = Math.round(time / 24);
          setD(time);
          return false;
        }else{
          return true;
        }
    }

    return function(){
      clearInterval(interval);
    }
  },[timer]);
  return(
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
      <div className={styles.time}>
        <span className={styles.num} >{loadTime(timeD)}</span>
        <small className={styles.text}>Ngày</small>
      </div>
      <div className={styles.time}>
        <span className={styles.num} >{loadTime(timeH)}</span>
        <small className={styles.text}>Giờ</small>
      </div>
      <div className={styles.time}>
        <span className={styles.num} >{loadTime(timeM)}</span>
        <small className={styles.text}>Phút</small>
      </div>
      <div className={styles.time}>
        <span className={styles.num} >{loadTime(timeS)}</span>
        <small className={styles.text}>Giây</small>
      </div>
    </Stack>
  )
}
export default memo(Timer);