import { memo } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material/';

import { Frame, Image } from '~/components';
import ItemName from './Name';
import ItemQuantity from './Quantity';
import ItemPrice from './Price';
function ViewItem({ loading, ImageUrl, Alias, Name ,Quantity,Price}) {
  return (
    <>
      <ListItem divider spacing={1}>
        <ListItemIcon>
          <Frame variant={'square'} loading={loading}>
            <Image fit={'contain'} src={ImageUrl} />
          </Frame>
        </ListItemIcon>
        <ListItemText>
          <ItemName loading={loading} alias={Alias} name={Name} />
          <ItemQuantity loading={loading} quantity={Quantity} />
          <ItemPrice loading={loading} price={Price} />
        </ListItemText>
      </ListItem>
    </>
  );
}
export default memo(ViewItem);
