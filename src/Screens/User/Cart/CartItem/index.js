import {memo,useReducer} from 'react';
import clsx from 'clsx';
import {
  Stack,
  Card,
  Divider,
  CardContent,
  CardActions,
} from '@mui/material/';
import styles from './styles.module.css';

import Provider from "./provider";
import {initData,reducer} from "./init";
import DeleteButton from "./DeleteButton/"
import ItemName from "./Name/";
import ItemPrice from "./Price/";
import ItemQuantity from "./Quantity/";

import {Frame,Image} from "../../../../Components/"
function CartItem({data,index,...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
    <Provider index={index} data={data} state={state} dispath={dispath}>
      <Card className={clsx(styles.item)} component="li">
        <Stack direction="row">
          <Divider orientation="vertical" flexItem />
          <CardContent className={styles.image}>
            <Frame square loading={state.isLoading}>
              <Image contain src={!state.isLoading && state.data.ImageUrl}/>
            </Frame>
          </CardContent>
          <Divider orientation="vertical" flexItem />
          <CardContent className={styles.content}>
            <ItemName />
            <ItemPrice />
            <ItemQuantity />
          </CardContent>
          <Divider orientation="vertical" flexItem />
          <CardActions>
            <DeleteButton />
          </CardActions>
        </Stack>
      </Card>
    </Provider>
  )
}
export default memo(CartItem);