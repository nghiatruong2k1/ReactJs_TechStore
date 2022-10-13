import { memo, Fragment } from 'react';
import { Stack} from '@mui/material/';
import CartItem from '../Item';
function CartContent({data}) {
  return (
    <>
      <Stack spacing={1}>
        {data.map(function (item, index) {
          if (item) {
            return <CartItem {...item} loading={false} index={index} key={index} />;
          } else {
            return <Fragment key={index}></Fragment>;
          }
        })}
      </Stack>
    </>
  );
}
export default memo(CartContent);
