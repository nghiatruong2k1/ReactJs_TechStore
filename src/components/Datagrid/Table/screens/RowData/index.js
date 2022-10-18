import { memo, useCallback,  useEffect, useState } from 'react';
import { TableRow } from '@mui/material/';
import Cell from '../../components/Cell';

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
          return (
            <Cell
              type={type}
              key={index + 1}
              data={data}
              display={display}
              loading={loading}
            />
          );
        })}
      </TableRow>
    </>
  );
}
export default memo(RowData);
