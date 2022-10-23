import { memo, useCallback,  useEffect, useState,Fragment } from 'react';
import { TableRow } from '@mui/material/';
import Cell from '../../components/Cell';
import { useGetDatagridContext } from '../../../provider';

function RowData({ data, loading, displays }) {
  const [isCheck, setCheck] = useState(false);
  useEffect(()=>{
      setCheck(false);
    },
    [data],
  );
  const handleChange = useCallback((name, check) => {
    setCheck(check);
  }, []);
  const { state } = useGetDatagridContext();
  return (
    <>
      <TableRow>
        <Cell
          key={0}
          type="checkbox"
          display={{
            name: 'isCheck',
            onChange: handleChange,
          }}
          data={{ isCheck }}
          loading={loading}
        />
        {displays.map(({ type, ...display }, index) => {
          if (state[display.name]?.isShow) {
            return (
              <Cell
              type={type}
              key={index + 1}
              data={data}
              display={display}
              loading={loading}
              />
            );
          } else {
            return <Fragment key={index + 1} />;
          }
        })}
      </TableRow>
    </>
  );
}
export default memo(RowData);
