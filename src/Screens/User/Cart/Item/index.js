import {memo,useReducer} from 'react';
import clsx from 'clsx';
import {
  Stack,
  Card,
  Divider,
  CardContent,
  CardActions,
  Skeleton,
  Typography
} from '@mui/material/';
import styles from './styles.module.css';

import Provider from "./provider";
import DeleteButton from "./DeleteButton/";

import {NavLink} from "react-router-dom";
import { getRoute } from "../../../../Config/Route/";
import {formatNumber} from "../../../../Config/Format/";
import {Frame,Image} from "../../../../Components/";
function CartItem({data,index,...props}){
  return(
    <Provider index={index} data={data}>
      <Card className={clsx(styles.item)} component="li">
        <Stack direction="row">
          <Divider orientation="vertical" flexItem />
          <CardContent className={styles.image}>
            <Frame square loading={!data}>
              <Image contain src={data && data.ImageUrl}/>
            </Frame>
          </CardContent>
          <Divider orientation="vertical" flexItem />
          <CardContent className={styles.content}>
            <Typography>
              {
                data && (data.Name ?? "Đang cập nhật")
                || (<Skeleton className="skeleton" />)
              }
            </Typography>
            <Typography>
              {
                data && ("Giá tiền: " + formatNumber(data.Price,3,0) + " đ")
                || (<Skeleton className="skeleton" />)
              }
            </Typography>
            <Typography>
              {
                data && ("Số lượng: " + data.Quantity ?? "0")
                || (<Skeleton className="skeleton" />)
              }
            </Typography>
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