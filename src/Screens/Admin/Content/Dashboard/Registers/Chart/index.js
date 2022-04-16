import {memo,useContext} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import { Bar ,Line } from "react-chartjs-2";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';
import {OrdersContext} from "../provider";
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
function OrdersChart({...props}){
  const {datas,labels} = useContext(OrdersContext);
  const data = {
    datasets: [
      {
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        data: datas,
        label: '',
        maxBarThickness: 10
      }
    ],
    labels: labels
  };

  const options = {
    responsive: true,
    tooltips: {
      borderWidth: 1,
      enabled: true,
      intersect: false,
      mode: 'index',
    }
  };
  return(
    <Line
      type='line'
      data={data}
      options={options}
    />
  )
}
export default memo(OrdersChart);