import { memo, useMemo} from 'react';
import { Chart } from '~/components';

import { types } from '../init';
function ChartRegistersLine({ datas = [], inType }) {
  const datasets = useMemo(() => {
    const chars = datas.reduce(function (result, item) {
      const lb = types[inType].getLabel(item.CreateDate);
      if (result[lb] === undefined) {
        result[lb] = 0;
      }
      result[lb] += item.Total;
      return result;
    }, {});

    return [
      {
        backgroundColor: '#00afaf',
        borderColor: '#00afaf',
        fill: true,
        data: Object.keys(chars).map((key) => ({ x: key, y: chars[key] ?? 0 })),
        label: 'Số lượng',
      },
    ];
  }, [inType, datas]);

  const title = useMemo(()=>{
      return `Biểu đồ đăng ký tài khoản (${
        (types[inType] && types[inType].text) || ''
      })`
    },
    [inType],
  );
  return <Chart  datasets={datasets} title={title} />;
}
export default memo(ChartRegistersLine);
