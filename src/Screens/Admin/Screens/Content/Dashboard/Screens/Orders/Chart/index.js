import {memo,useContext,useMemo,useRef} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import { Bar ,Line } from "react-chartjs-2";
import {  Chart } from "chart.js"
import { 
  Decimation,
  Legend,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip
} from 'chart.js';


import {types} from "../init";
import {OrdersContext} from "../provider";

const colors = ["#ff0","#0ff","#00f","#f00","#f0f","#0f0"]

Chart.register(
    Decimation,
    Legend,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip
);
const getOptions = (function(){
  const options = {
    responsive: true,
    tooltips: {
      borderWidth: 1,
      enabled: true,
      intersect: false,
      mode: 'index',
    },plugins:{
      legend:{
        position:"bottom"
      },title:{
        display:true,
        position:"bottom"
      }
    },scales:{
      y: {
        display: true,
        title: {
          display: false,
        },
        ticks: {
          stepSize: 1
        }
      }
    }
  }
  return function(title){
    options.plugins.title.text = title ?? "";
    return options;
  }
})();

function OrdersChart({...props}){

  const {state} = useContext(OrdersContext);
  const chars = useMemo(function(){
    return state.datas.reduce(function(result,item){     
      const lb = types[state.inType].getLabel(item.CreateDate);
      
      if(result[lb] === undefined){
        result[lb] = {};
      }
      if(result[lb][item.StatusName] === undefined){
        result[lb][item.StatusName] = 0;
      }
      result[lb][item.StatusName]+=item.Total;

      return result;
    },{});
  },[state.inType,state.datas]);


  const data = {
    datasets: state.status.map(function(status,index){
      return {
        backgroundColor:colors[index],
        borderColor:colors[index],
        fill:true,
        data: Object.keys(chars).map((key)=>({x:key,[status.Name]:chars[key][status.Name] ?? 0})),
        label: status.Name,
        parsing: {
          yAxisKey: status.Name
        }
      }
    })
  };

  const thisRef = useRef();
  const options = useMemo(function(){
    return getOptions(`Biểu đồ đơn hàng (${types[state.inType] && types[state.inType].text || ""})`)
  },[state.inType])
  return(
    <Line
      ref={thisRef}
      type='line'
      data={data}
      options={options}
    />
  )
}
export default memo(OrdersChart);