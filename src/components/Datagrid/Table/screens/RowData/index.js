import { memo, useCallback, useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { TableRow } from '@mui/material/';
import styles from '../../Table.module.css';
import Cell from '../../components/Cell';

function RowData({ data, loading, displays, optionData }) {
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
        {optionData && (
          <Cell key={displays.length + 1} loading={loading}>
            {optionData.content && optionData.content(data)}
          </Cell>
        )}
      </TableRow>
    </>
  );
}
export default memo(RowData);
