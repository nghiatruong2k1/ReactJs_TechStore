import { memo, useCallback, useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { TableRow } from '@mui/material/';
import styles from '../../Table.module.css';
import Cell from '../../components/Cell';

// import PublicButton from "./PublicButton";
// import TrashButton from "./TrashButton";
// import EditButton from "./EditButton";
// import DeleteButton from "./DeleteButton";

function RowData({ data, loading, displays }) {
  const [isCheck, setCheck] = useState(false);
  useEffect(
    function () {
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
        {/* <Cell 
          type="option"
          key={displays.length + 1} 
          loading={loading} 
          cellProps={{sx:{fontSize:"1.2em !important"}}}
        >
          <PublicButton data={data} loading={loading}/>
          <TrashButton data={data} loading={loading}/>
          <DeleteButton data={data} loading={loading}/>
          <EditButton data={data}loading={loading}/>
        </Cell> */}
      </TableRow>
    </>
  );
}
export default memo(RowData);
