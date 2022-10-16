import { memo, useMemo, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import {
  Decimation,
  Legend,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
} from 'chart.js';

Chart.register(
  Decimation,
  Legend,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
);
const getOptions = (function () {
  const options = {
    responsive: true,
    tooltips: {
      borderWidth: 1,
      enabled: true,
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        position: 'bottom',
      },
    },
    scales: {
      y: {
        display: true,
        title: {
          display: false,
        },
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
  return function (title) {
    options.plugins.title.text = title ?? '';
    return options;
  };
})();

function ChartComponent({ datasets = [], title = '' }) {
  const thisRef = useRef();

  const options = useMemo(() => {
    return getOptions(title);
  }, [title]);
  return (
    <Line ref={thisRef} type="line" data={{ datasets }} options={options} />
  );
}
export default memo(ChartComponent);
