import {memo,useEffect,useState} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
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
    return new Date("2022/12/30 14:30:00");
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
    <div className="timer">
       <div> <span className="num">{loadTime(timeD)}</span> <small>Days</small></div>
       <div> <span className="num">{loadTime(timeH)}</span> <small>Hours</small></div>
       <div> <span className="num">{loadTime(timeM)}</span> <small>Min</small></div>
       <div> <span className="num">{loadTime(timeS)}</span> <small>Sec</small></div>
    </div>
  )
}
export default memo(Timer);