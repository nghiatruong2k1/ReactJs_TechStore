import { memo, useCallback, useEffect,  useState } from 'react';
import { Stack, Pagination } from '@mui/material/';
import { useSearchParams } from 'react-router-dom';
function PagingComponent({ total,limit,page,onChange ,disabled}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(Math.ceil(total / limit));
  }, [total, limit]);
  useEffect(()=>{
    if (page < 1 || (page > 1 && count >= 1 && page > count)) {
        onChange && onChange(1)
    }
  },[page,count])
  const handleChange = useCallback((event, index) => {
    onChange && onChange(index)
  }, []);
  if (count > 1) {
    return (
      <Stack py={1}>
        <Pagination onChange={handleChange} count={count} page={page} disabled={disabled}/>
      </Stack>
    );
  } else {
    return <></>;
  }
}
export default memo(PagingComponent);
