import {memo,useState,useEffect} from 'react';
import clsx from 'clsx';
import {
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Stack,
  Grid,
  Button
} from '@mui/material/';
import {
  ArrowForward,
  LocalMall
} from '@mui/icons-material/';
import{ NavLink }from'react-router-dom';
import styles from './styles.module.css';
import {useGet} from "../../../../../../../../Config/Fetch/"
function CardStatistic({api,title,to,cardProps,...props}){
  const {data,isLoading,isError} = useGet({
    api:api,
    initData:0
  },[]);
  if(!cardProps){
    cardProps = {}
  }
  return(
    <Grid item {...props}>
      <Card {...cardProps} className={clsx(styles.card,{[cardProps.className]:cardProps.className})}>
        <CardContent className={styles.body}>
          <Typography 
              variant="h3"
              className={styles.number}
          >
            {data}
          </Typography>
          <Typography 
              className={styles.title}
          >
            {title}
          </Typography>
          <LocalMall className={styles.icon}/>
        </CardContent>
        <Divider />
        <CardActions 
          className={styles.footer} 
          disableSpacing
        >
          <Button 
            component={NavLink}
            className={styles.button} 
            to={to ?? "#"} 
            size="small"
            endIcon={<ArrowForward />}
          >
            Xem chi tiết
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
export default memo(CardStatistic);