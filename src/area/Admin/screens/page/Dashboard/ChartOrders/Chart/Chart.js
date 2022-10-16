import { memo, useMemo} from 'react';
import { Chart } from '~/components';
import { types } from '../init';
const colors = ['#ff0', '#0ff', '#00f', '#f00', '#f0f', '#0f0'];
function OrdersChart({ datas = [], status = [], inType }) {
  const chars = useMemo(() => {
    return datas.reduce(function (result, item) {
      const lb = types[inType].getLabel(item.CreateDate);

      if (result[lb] === undefined) {
        result[lb] = {};
      }
      if (result[lb][item.StatusName] === undefined) {
        result[lb][item.StatusName] = 0;
      }
      result[lb][item.StatusName] += item.Total;

      return result;
    }, {});
  }, [inType, datas]);

  const datasets = useMemo(() => {
    return status.map(function (status, index) {
      return {
        backgroundColor: colors[index],
        borderColor: colors[index],
        fill: true,
        data: Object.keys(chars).map((key) => ({
          x: key,
          [status.Name]: chars[key][status.Name] ?? 0,
        })),
        label: status.Name,
        parsing: {
          yAxisKey: status.Name,
        },
      };
    });
  }, [status, chars]);
  const title = useMemo(
    function () {
      return `Biểu đồ đơn hàng (${
        (types[inType] && types[inType].text) || ''
      })`;
    },
    [inType],
  );
  return <Chart datasets={datasets} title={title}/>;
}
export default memo(OrdersChart);
